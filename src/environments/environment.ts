// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDkc-6URyP8xY38fUiLyd-hXZF2E4hmzbU",
    authDomain: "angular-4-with-firebase.firebaseapp.com",
    databaseURL: "https://angular-4-with-firebase.firebaseio.com",
    projectId: "angular-4-with-firebase",
    storageBucket: "angular-4-with-firebase.appspot.com",
    messagingSenderId: "639076067624"
    // apiKey: '<your-key>',
    // authDomain: '<your-project-authdomain>',
    // databaseURL: '<your-database-URL>',
    // projectId: '<your-project-id>',
    // storageBucket: '<your-storage-bucket>',
    // messagingSenderId: '<your-messaging-sender-id>'
  }
};