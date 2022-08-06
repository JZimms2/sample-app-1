export default {
    // note: The template points to a component with a src property
    // Use this DynamicCard component to load a remote url in your kview that utilizes the Kustomer Cards SDK for more advanced integrations.
    // For documentation around this, see https://kustomer-enterprise-group.readme.io/kustomer-apps-platform/docs/card-js
    template:'<div><DynamicCard src="https://cliff-swanky-protest.glitch.me" context={context.conversation} noPadding fillToWidth /></div>\n',
    name: 'joke-kview-zzz-josh-shakira.advanced', // replace organization with your Kustomer organization name
    context: 'smartbar-card',
    resource: 'conversation',
    meta: {
        displayName: 'Joke Time!',
        icon: 'baby',
        state: 'open'
    }
}
