const firebaseConfig = {
    apiKey: "AIzaSyA9iH6UfMWOoYjXypsdKu35ZRu_2Gp93l0",
    authDomain: "iqube-forms.firebaseapp.com",
    databaseURL: "https://iqube-forms-default-rtdb.firebaseio.com",
    projectId: "iqube-forms",
    storageBucket: "iqube-forms.appspot.com",
    messagingSenderId: "492608661513",
    appId: "1:492608661513:web:278c51aafc1513c29ff0d8"
  };

  firebase.initializeApp(firebaseConfig);

  //reference for database
  var iqube_formsdb = firebase.database().ref('iqube-forms');

document.getElementById('contactform').addEventListener('submit', submitform);

function submitform(e){
    e.preventDefault();

    var fname = getElementVal('fname');
    var lname = getElementVal('lname');
    var age = getElementVal('age');
    var gender = getElementVal('gender');
    var city = getElementVal('city');
    var country = getElementVal('country');
    var phone = getElementVal('phone number');

    console.log(fname,lname,age,gender,city,country,phone);


}

function getElementVal(id) {
    return document.getElementById(id).value;
}