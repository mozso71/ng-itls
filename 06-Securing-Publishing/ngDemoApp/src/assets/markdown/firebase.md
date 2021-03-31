Notice that this sample has been used to its own module fbauth.module.ts to allow usage in AppRoot

To be able to use Firebase Auth you must:

- Create an account at [Firebase](https://firebase.google.com/)
- Update your Firebase Config in environment.ts

```
firebaseConfig: {
    apiKey: 'AIzaSyB-eL0BW8dFw-0UgYdN-nCiJlvhMsEYSlM',
    authDomain: 'ng-customer-9b0fe.firebaseapp.com',
    databaseURL: 'https://ng-customer-9b0fe.firebaseio.com',
    projectId: 'ng-customer--9b0fe',
    storageBucket: 'ng-customer-9b0fe.appspot.com',
    messagingSenderId: '206634584842',
    appId: '1:206634584842:web:a6be5c91d9f059ba3888f3',
    measurementId: 'G-VLP9FWLWKC',
},
```

> Note: Don't check in this config into source control - mine will be deleted after this presentation!

When using together with .NET Core Api register FirebaseInterceptor
