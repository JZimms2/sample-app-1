import Action from './action'
import KView from '../my-first-advanced-kview-app/kviews/my-first-cardjscard-kview'

export default {
    "app": "star_wars_character_finder",
    "version": "0.0.7",
    "title": "Star Wars People Search",
    "settings": {
        "default": {
          "authToken": {
            "type": "secret",
            "defaultValue": "",
            "required": true
          },
          "subdomain": {
            "type": "string",
            "defaultValue": "",
            "description": "The subdomain field that will be included in the API when we make a request"
          }
        }
      },
      "i18n": {
        "en_us": {
          "starwars.settings.page.title": "Star Wars People Search Action",
          "starwars.settings.page.description": "Search for Characters from the hit franchise",
          "starwars.settings.path.default.authToken.description": "An auth token for no reason because the API is open",
          "starwars.settings.path.default.authToken.displayName": "Auth Token"
        }
      },
    "actions": [{
      "name": "kustomer.app.starwars.search.people",
      "description": "Star Wars Character Searcher",
      "type": "rest_api", // WF Actions are ALWAYS REST API actions
      "appSettings": {
        "authToken": {
            "key": "starwars.default.authToken" // Stored in separate folder labeled settings in the App Settings property. More on this here: https://developer.kustomer.com/kustomer-apps-platform/docs/app-settings
        }
      },
      "inputTemplate": {
        "uri": "https://swapi.dev/api/people/?search={{queryString}}", // queryString also references values from inputSchema property. Value is blank in example Action.
        "method": "GET",
        "headers": { // values from the appSettings object are available here
          "authorization": "Bearer {{authToken}}" // appSettings.authToken
          },
        "qs": "/#queryString", // Replaces with value of the inputSchema property below
        "data": {
           // The raw JSON of the request body for the API request
         },
        "json": true
      },
      "sampleOutputContext": {
        "data": {results: []}
      },
      "inputSchema": {
        "properties": {
          "queryString": {
            "type": "string",
          }
        },
        "required": ["queryString"],
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
    }]

  }
