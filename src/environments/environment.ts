// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    useEmulators: true,
    production: false,
    firebase: {
        apiKey: 'ae61eccaded688999bd6bf68a236df36b39bd9fa',
        authDomain: 'inn-calculator.firebaseapp.com',
        databaseURL: 'https://inn-calculator.firebaseio.com',
        projectId: 'inn-calculator',
        storageBucket: 'inn-calculator.appspot.com',
        messagingSenderId: '480362569154',
        appId: '1:480362569154:web:2fe6f75104cdfb82f50a5b',
        measurementId: 'G-CBRYER9PJR'
    },
    vapidKey: 'BIDPctnXHQDIjcOXxDS6qQcz-QTws7bL8v7UPgFnS1Ky5BZL3jS3-XXfxwRHmAUMOk7pXme7ttOBvVoIfX57PEo',
    recaptcha3SiteKey: '6LeI1VocAAAAAEHdUR_I_p2dDBkes4Hu7c5utbKT',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error'; // Included with Angular CLI.