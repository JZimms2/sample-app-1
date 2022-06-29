import Action from './action'



export default {
    "app": "ecommstore",
    "version": "0.0.1",
    "title": "E-comm Store",
    "actions": [{
      "name": "kustomer.app.ecommstore.store.refundOrder",
      "description": "Refund Order",
      "type": "rest_api",
      "appSettings": {
        "authToken": {
            "key": "ecommstore.default.authToken"
        }
      },
      "inputTemplate": {
        "uri": "https://api.ecommstore.com/orders/{{orderId}},
        "method": "POST",
        "headers": {
          "authorization": "Bearer {{authToken}}"
          },
        "qs": "/#querystring",
        "data": {
          refund: true
         },
        "json": true
      },
      "sampleOutputContext": {
        "data": {status: "REFUNDED"}
      },
      "inputSchema": {
        "properties": {
          "querystring": {
            "type": "string",
          }
        },
        "required": [],
        "additionalProperties": false
      },
      "outputTemplate": {
        "response": "/#response"
        "body": "/#body"
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "response": {
            "type": "object"
          },
          "body": {
            "type": "object"
          }
        },
        "additionalProperties": false
      }
    }]
  }
