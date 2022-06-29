export default {
    name: "My first Workflow Action App",
    // This site can be used to generate a quick webhook to test outgoing data. Just visit and include the generated GUID in the url
    url: "https://webhook.site/",
    headers: [{
      name: "x-outbound-webhook-origin",
      value: "kustomer"
    }],
    events: ["kustomer.conversation.create", "kustomer.conversation.update"]
}
