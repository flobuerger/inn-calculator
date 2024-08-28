// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    useEmulators: true,
    production: false,
    firebase: {
        apiKey: '...',
        authDomain: '...',
        databaseURL: '...',
        projectId:'...',
        storageBucket: '...',
        messagingSenderId:'...',
        appId: '...',
        measurementId: '...'
    },
    vapidKey: '...',
    recaptcha3SiteKey: '...',
};