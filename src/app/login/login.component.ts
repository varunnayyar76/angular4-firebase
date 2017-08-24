import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  displayName;  
  items: FirebaseListObservable<any[]>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;        
        return;
      }
      alert(JSON.stringify(user));
      this.displayName = user.displayName;      
    });
    
    this.items = db.list('/items');
  }

  signInWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        console.log(res)
      }, err => {
        console.log(err);
      });
  }

  signIn() {
    this.afAuth.auth
      .createUserWithEmailAndPassword('varun@yahoo.com', '123456')
      .then(res => {
        this.db.object('Users/' + res.users[0].uid).set(res.users[0]);

        console.log(JSON.stringify(res));
      })
  }

  signInWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signOut() {
    this.afAuth.auth.signOut();
  }
}



// {
//     "uid": "uw35IVxgeJM83oxkNSJy7Ez6jWO2",
//     "displayName": null,
//     "photoURL": null,
//     "email": "varun@yahoo.com",
//     "emailVerified": false,
//     "phoneNumber": null,
//     "isAnonymous": false,
//     "providerData": [{
//         "uid": "varun@yahoo.com",
//         "displayName": null,
//         "photoURL": null,
//         "email": "varun@yahoo.com",
//         "phoneNumber": null,
//         "providerId": "password"
//     }],
//     "apiKey": "AIzaSyDkc-6URyP8xY38fUiLyd-hXZF2E4hmzbU",
//     "appName": "ng4-firebase",
//     "authDomain": "angular-4-with-firebase.firebaseapp.com",
//     "stsTokenManager": {
//         "apiKey": "AIzaSyDkc-6URyP8xY38fUiLyd-hXZF2E4hmzbU",
//         "refreshToken": "APRrRCIWPdxEpP5g5yke7Z2mYqxGCXsquok3_esMigpPkzxu_qoPq1GXBLlLsmHN2C-L78n51tczL-MGeeVg85MCQ6gy2XMh_Zys2zTUPXDEAGCb-JLfYNHKpFqlJbUJW-yICO4UEx_f8QFRdl-6DK-jgGPXZIbjxa_q9RG9pNHeg5Oi_qNVCILNE_hqVGOdOiMAwbVKbdixK2XR9z8dfZBZ54pcsKsDIe4IV5E0IdID9QWU03LvcFw",
//         "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImY3ZGFjOGY4MzYwNjVjODgwODNkMzkwNzZhODU4OWEzMTk5NWZjNDQifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYW5ndWxhci00LXdpdGgtZmlyZWJhc2UiLCJhdWQiOiJhbmd1bGFyLTQtd2l0aC1maXJlYmFzZSIsImF1dGhfdGltZSI6MTUwMzU3MzQ0OCwidXNlcl9pZCI6InV3MzVJVnhnZUpNODNveGtOU0p5N0V6NmpXTzIiLCJzdWIiOiJ1dzM1SVZ4Z2VKTTgzb3hrTlNKeTdFejZqV08yIiwiaWF0IjoxNTAzNTczNDQ4LCJleHAiOjE1MDM1NzcwNDgsImVtYWlsIjoidmFydW5AeWFob28uY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInZhcnVuQHlhaG9vLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MY1b4er6woY0WNU24B04x0qMhgm2h2PmEjym-WeE_uM5Xem43BNBk_FIMm0ZAqnOiRFD6OHQyUjcuMGDlF1_09kVIk3-dLXawVKcOvoZ5pq7WX_sb-sGAKcK8fRxYAu_1v1KcjWOZl6iM9EmpoE440LZM4DqRf2aAs6tn3mz1KzDbsvcC7fpG1HMnhshB-6pNIIDQoWrw3o3keYjyzNxn2RnYLxNOfE1bpVQldRYS46vHkUwpoUeh8MvI2NUfq5JGd0F7DVX7GTzPYznEZQCILNsNsfq1pFnICAAgVCNGHBKo4ZFtjrW4AJ53-UEV_-KIOjfJ48io0x79gSozb57rg",
//         "expirationTime": 1503577048805
//     },
//     "redirectEventId": null
// }


// {
//  "error": {
//   "errors": [
//    {
//     "domain": "global",
//     "reason": "invalid",
//     "message": "EMAIL_EXISTS"
//    }
//   ],
//   "code": 400,
//   "message": "EMAIL_EXISTS"
//  }
// }