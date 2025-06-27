import os

GRAPHQL_ENDPOINT: str = os.getenv("GRAPHQL_ENDPOINT", "https://graphql-staging.on.com")

GET_ORDER_STATUS_QUERY: str = """
query GetOrderStatus($orderNumber: String!, $email: String!) {
  order(orderNumber: $orderNumber, email: $email) {
    estimatedDeliveryDate
    aggregatedStatus
    trackingLink
    trackingNumber
  }
}
"""
