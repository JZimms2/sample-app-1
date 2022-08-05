export default {
    "actions":
    [{
    "name": "kustomer.app.starwars.search.people",
    "description": "Star Wars Character Searcher",
    "type": "rest_api", // WF Actions are ALWAYS REST API actions
    "appSettings": {
      "authToken": {
          "key": "starwars.default.authToken" // Stored in separate folder labeled settings in the App Settings property. More on this here: https://developer.kustomer.com/kustomer-apps-platform/docs/app-settings
      }
    }
}]
}
