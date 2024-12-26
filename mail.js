const firebaseConfig = {
    apiKey: "AIzaSyAY6scfkCBHJlbSEDoDbBKXIfdIGCrrkKA",
    authDomain: "orderform-90528.firebaseapp.com",
    databaseURL: "https://orderform-90528-default-rtdb.firebaseio.com",
    projectId: "orderform-90528",
    storageBucket: "orderform-90528.appspot.com",
    messagingSenderId: "948822179589",
    appId: "1:948822179589:web:cddb6962def248b8f0016c"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);
//reference your database 
var orderformDB = firebase.database().ref('orderform');

document.getElementById('orderform').addEventListener("submit", submitform);

function submitform(e) {
    e.preventDefault();
    var name = getElementVal('name');
    var number = getElementVal('number');
    var order = getElementVal('order');
    var afood = getElementVal('afood');
    var hmuch = getElementVal('hmuch');
    var add = getElementVal('add');

    console.log(name, number, order, afood, hmuch, add);
    saveMessages(name, number, order, afood, hmuch, add);

    //enable alert
    document.querySelector('.alert').style.display = 'block';

    //remove the alert 
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);
    //reset the form 
    document.getElementById("orderform").reset();
}

const saveMessages = (name, number, order, afood, hmuch, add) => {
    var neworderform = orderformDB.push();
    neworderform.set({
        name: name,
        number: number,
        order: order,
        afood: afood,
        hmuch: hmuch,
        add: add,
    });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;
}