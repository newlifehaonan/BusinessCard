# Businesscard Introduction
* _"My Business card is a card scaning and manangement E-Card wallet"_
* _A Web-based application developed in Angular 6 framework_
* _Developed by Harry Chen in CSC436 DePaul University as his final project_
* _Idea is provided by the courses Instructor Chandler Gegg_
* _User Information are save in google firebase_
* _App are only used for academic learning NOT FOR COMERCIAL BUSINESS_
* _App are already deployed at google cloud. Please go to `https://businesscard-115bf.appspot.com/landingpage/dashboard` to review!_

# Application Features

* _User authentification: function provided by google firebase auth tool_
* _User profile and activity log: saved in google firebase database_
* _App routing between over 10 more componenets_
* _Dynamic Injection was used during development_
* _All SCSS features are self developed although view are not responsive yet for mobile_

# How to use
* `git clone https://github.com/newlifehaonan/BusinessCard.git`
* Go to `assets/environment.ts` and add your own firebase key and google api key, format is as follow
```typescript
// Please do not modify the variable name, otherwise you will manualy change 
// the variable name in each componenets or services that used it.
export const config = {
  apiKey: 'Your Key',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
};

export const googleApi = {
  key : 'Your Google Api key'
}
```
* `Npm install` all dependency

* `Ng serve`

* If you have any question about how to lunch the app locally, please contact *HCHEN@520638@gmail.com*

