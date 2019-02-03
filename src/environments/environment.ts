// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDvimY5Buf8w1DWlcEeqkKnfER_K5lz5lE',
    authDomain: 'weekly-planner-db1.firebaseapp.com',
    databaseURL: 'https://weekly-planner-db1.firebaseio.com',
    projectId: 'weekly-planner-db1',
    storageBucket: 'weekly-planner-db1.appspot.com',
    messagingSenderId: '177513723458'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
