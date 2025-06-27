import aiohttp

from .GraphQLModel import GET_ORDER_STATUS_QUERY, GRAPHQL_ENDPOINT


async def fetch_order_status(order_number: str, email: str) -> str:

    if not order_number or not email:
        raise ValueError("Both order_number and email must be provided.")

    session = aiohttp.ClientSession(timeout=aiohttp.ClientTimeout(total=30))

    payload = {
        "query": GET_ORDER_STATUS_QUERY,
        "variables": {
            "orderNumber": order_number,
            "email": email
        }
    }

    try:
        async with session.post(
                GRAPHQL_ENDPOINT,
                json=payload,
                headers={
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
        ) as response:

                try:
                    response.raise_for_status()
                except aiohttp.ClientResponseError as cre:
                    return f"Error: HTTP {cre.status} - Failed to fetch order status"

                data = await response.json()
                print("response ran")
                print(data)
                if "errors" in data and data["errors"]:
                    error_messages = [error.get("message", "Unknown error") for error in data["errors"]]
                    return f"Error: {'; '.join(error_messages)}"

                # Check if order exists
                if not data.get("data") or not data["data"].get("order"):
                    return f"Order {order_number} not found. Please check your order number and email."

                parsed_response = order_parser(data)

                return parsed_response

    except (TimeoutError, aiohttp.ClientError) as e:
        return f"Error communicating with GraphQL API: {e}"
    except Exception as e:
        return f"Error fetching order status: {str(e)}"
    finally:
        await session.close()

def order_parser(data: any) -> list[str]:
     order = data["data"]["order"]
     parsed_response = []

     parsed_response.append(f"Order details for {order.get('order_number')}:")

     if order.get("aggregatedStatus"):
         parsed_response.append(f"Status: {order['aggregatedStatus']}")

     if order.get("estimatedDeliveryDate"):
         parsed_response.append(f"Estimated Delivery: {order['estimatedDeliveryDate']}")

     if order.get("trackingNumber"):
         parsed_response.append(f"Tracking Number: {order['trackingNumber']}")

     if order.get("trackingLink"):
         parsed_response.append(f"Track your package: {order['trackingLink']}")

     print(parsed_response)

     return "\n".join(parsed_response)
