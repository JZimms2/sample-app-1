import Kviews from './kviews';

// When trying to install or use this template, make sure to postfix the `app` property below with a unique value.
// For example, my_first_app__myKustomerOrg01_01
export default {
    app: 'app_expert_testing',
    version: '0.0.1',
    appDetails: { // note: the object and all it's fields are optional, but will be used to fill out the app store listing within Kustomer
        appDeveloper: {
            name: 'JZimms',
            website: 'In progress',
            supportEmail: 'example@email.com',
        },
        externalPlatform: {
            name: '<<Insert the name of your platform/company>>',
            website:'<<Insert the url for your platform/company>>',
        },
        documentationLinks: [{
            title: '<<Insert the display title for your documentation>>',
            url: 'www.example.com',
        }],
    },
    title: 'App Expert Testing',
    description: 'This app is just a small example of what an app can do!',
    iconUrl: 'https://pbs.twimg.com/profile_images/1146053597785993217/DcPQyO9Q_400x400.png',
    postInstallMessage: 'Congratulations! You\'ve installed your first successful app!',
    kviews: Kviews,
};
