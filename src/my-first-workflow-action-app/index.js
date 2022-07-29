import Action from './action'



export default {
    "app": "ecommstore",
    "version": "0.0.4",
    "title": "E-comm Store",
    "actions": [{
      "name": "kustomer.app.ecommstore.store.refundOrder",
      "description": "Refund Order",
      "type": "rest_api", // WF Actions are ALWAYS REST API actions
      "appSettings": {
        "authToken": {
            "key": "ecommstore.default.authToken" // Stored in .env normally?
        }
      },
      "inputTemplate": {
        "uri": "https://api.ecommstore.com/orders/{{orderId}}", // orderId also references values from inputSchema property. Value is blank in example Action.
        "method": "POST",
        "headers": { // values from the appSettings object are available here
          "authorization": "Bearer {{authToken}}" // appSettings.authToken
          },
        "qs": "/#querystring", // Replaces with value of the inputSchema property below
        "orderId": "/#orderId",
        "data": {
          refund: true // The raw JSON of the request body for the API request
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
          }, "orderId": {
            "type": "string"
          }
        },
        "required": ["orderId"],
        "additionalProperties": false
      },
      "outputTemplate": {
        "response": "/#response",
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
    }],

  }
