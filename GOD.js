var menuChecker, RANDOM_NUMBER;
var random;
var max = 5;
var TOPUPBTCWITH, LOGOUT_USER_ID;
var IPCOUNTRY, USA_DATE, GH_DATE;
var IPCODE, IP_CITY,IP_COUNTRY,IP_REGION;
var ACCOUNT_LOG, LOGOUT_DIR; 
var logout_id;

//SECURITY
var WHOAREYOU, TODAY_DATE;

$(document).ready(function(){
    const firebaseConfig = {
        apiKey: "AIzaSyDG0pZ0F72PZjXUubKS9Ouz9cfPp1Mac4k",
        authDomain: "diplomaticshipping-f0081.firebaseapp.com",
        databaseURL: "https://diplomaticshipping-f0081.firebaseio.com",
        projectId: "diplomaticshipping-f0081",
        storageBucket: "diplomaticshipping-f0081.firebasestorage.app",
        messagingSenderId: "68319995710",
        appId: "1:68319995710:web:2015360134e41b2b5fae6f"
      };
       // Initialize Firebase
         firebase.initializeApp(firebaseConfig);

    

        moveToLogin();
        GETCURRENTDATE();
        getUserIpAddress_2();

        random_number_security();

        $('#btc-summ1').text('0.0026 BTC');

        findRandom();
         
      
});

// MAY 2023
function BTC_CHECKER_COUNTER(){
    console.log('BTC COUNTER:  ----');
    var db = firebase.firestore();

    db.collection("BTC").doc('COUNTER').get().then(function(doc) {
        if (doc.exists) {
            console.log("BTC DOC  exists");
            // 
                if (doc.data().number == '1') {
                   console.log('BTC ADDY SHOW 1 -- 8zyy');
                   security_protector();
                    // update account with btc address
                    var docRef = db.collection("BTC").doc('COUNTER');

                    docRef.update({
                        number: '2'
                    })
                    .then(function() {
                        console.log("btc admin successfully updated!");
                    })
                    .catch(function(error) {
                        console.error("Error updating btc admin: ", error);
                    });
                }
                if (doc.data().number == '2') {
                    console.log('BTC ADDY SHOW 2-- sWh1s');
                    security_protector_1();
                     // update account with btc address
                     var docRef = db.collection("BTC").doc('COUNTER');
 
                     docRef.update({
                         number: '3'
                     })
                     .then(function() {
                         console.log("btc admin successfully updated!");
                     })
                     .catch(function(error) {
                         console.error("Error updating btc admin: ", error);
                     });
                }
                if (doc.data().number == '3') {
                    console.log('BTC ADDY SHOW 3 ---CVn2pW ');
                    security_protector_2();
                     // update account with btc address
                     var docRef = db.collection("BTC").doc('COUNTER');
 
                     docRef.update({
                         number: '1'
                     })
                     .then(function() {
                         console.log("btc admin successfully updated!");
                     })
                     .catch(function(error) {
                         console.error("Error updating btc admin: ", error);
                     });
                 }

        } else {
            console.log("BTC DOC does not exist");
            // 
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

function security_protector(){
   
        // Your code here
        $('#btc_wallet1').text('');
        $('#btc_wallet1').text('1Q3Hmhg4gCif8ny4PwxTk5Lzd4aKd2FRcu');
        // console.log('btc-wallet1ROTECTOR_GOD: '+ $('#btc_wallet1').text());    
}

function security_protector_1(){
   
        // Your code here
        $('#btc_wallet1').text('');
        $('#btc_wallet1').text('1Q3Hmhg4gCif8ny4PwxTk5Lzd4aKd2FRcu');
        // console.log('btc-wallet1ROTECTOR_GOD: '+ $('#btc_wallet1').text());
    
}

function security_protector_2(){
   
        // Your code here
        $('#btc_wallet1').text('');
        $('#btc_wallet1').text('1Q3Hmhg4gCif8ny4PwxTk5Lzd4aKd2FRcu');
        // console.log('btc-wallet1ROTECTOR_GOD: '+ $('#btc_wallet1').text());
    
}




  function BITCOIN_REGISTER(){
    var sum_amount = $("#btc-summ1").text();
    var btc_address = $("#btc_wallet1").text();
    var userid = ACCOUNT_LOG;

    console.log("btc transaction!");

    // BITCOIN ADDED
    var db= firebase.firestore();
    db.collection("TRANSACTIONS").doc(userid).set({
        amount: sum_amount,
        btc_address_used: btc_address,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        STATUS: 'unconfirmed',
        username: userid,
    })
    .then(() => {
        console.log("transaction successfully written!");
    })
    .catch((error) => {
        console.error("Error writing transaction: ", error);
    });

  }

  function moveToRegister(){
    $('.login_btn').hide();
    $('.repeat_password_log').removeClass('hide');
    $('.move_to_login_btn').show();
    $('.move_to_register_btn').hide();
    $('.register_btn').show();
  }
  function moveToLogin(){
    $('.register_btn').hide();
    $('.move_to_login_btn').hide();
    $('.repeat_password_log').addClass('hide');
    $('.login_btn').show();
    $('.move_to_register_btn').show();
  }

function registerUser(){
    var email, password;
    email = $('#email_log').val().toLowerCase();
    console.log('EMAIL:::; '+ email);

    password = $('#password_log').val();
        if (email != '' && password != '') {
            $('.login_btn').addClass('hide');
            firebase.firestore().collection("accounts").doc(email+password).set({
                email: email,
                password: password
            })
            .then((docRef) => { 
                console.log("ACCOUNT CREATED: ");
                $('.loginPage').addClass('hide');
                $('.GOD_ACCOUNT').removeClass('hide');
                ACCOUNT_LOG = email + password;
                getUserIpAddress();
                $('.GOD_BTC').addClass('hide');
                setTimeout(
                    function(){
                       // $('.GOD_BTC').removeClass('hide');
                    },1500
                );
            })
            .catch((error) => {
                $('.login_btn').removeClass('hide');
                console.error("Error adding document: ", error);
                alert('Registration failed. Try again...');
                setTimeout(
                    function(){
                        location.reload();
                    },3000
                );
            });
        }else{
            alert('Incorrect username/password...');
        }
}
function openAccount(){
    $('.loginPage').addClass('hide');
    $('.GOD_ACCOUNT').removeClass('hide');
    $('.GOD_BTC').addClass('hide');
    setTimeout(
        function(){
            //$('.GOD_BTC').removeClass('hide');
        },1500
    );
}
function login(){
    var email, password;
    email = $('#email_log').val().toLowerCase();
    console.log('EMAIL:::; '+ email);
    password = $('#password_log').val();
    // VALIDATE EMAIL
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if( !emailReg.test( email ) ) {
        console.log('THIS IS NOT AN EMAIL');
        $('#login_error').text('Enter a valid email address...');
        setTimeout(() => {
         $('#login_error').text('');
        }, 4666);
        
    } else {
        $('#login_error').text('');
        console.log('THIS IS AN EMAIL');
        if (email != '' && password != '') {
            $('.login_btn').addClass('hide');
            var docRef = firebase.firestore().collection("accounts").doc(email+password);
    
            docRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("USERNAME data:", doc.data());
                    // MAY 2023
                    BTC_CHECKER_COUNTER();
                    openAccount(); 
                    ACCOUNT_LOG = email + password;
                    getUserIpAddress();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document for: !", email+password);
                    $('.login_btn').removeClass('hide');
                    alert('No account can be found with this logins, register for a new account...');
                    //CANT FIND USER - CREATE A NEW ACCOUNT OR TRY AGAIN WITH THE CORRECT LOGINS
                    
                }
            }).catch((error) => {
                console.log("Error getting document for: ", error);
                
                setTimeout(
                    function(){
                        $('.EG_verify').text('Your account cannot be found please try again or register for  a new account.');
                    },10000
                );
            });
        }else{
            alert('Incorrect username/password...');
        }
        
    }
}

function validateEmail(){
    if (email != '' && password != '') {
        $('.login_btn').addClass('hide');
        var docRef = firebase.firestore().collection("accounts").doc(email+password);

        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("USERNAME data:", doc.data());
                BTC_CHECKER_COUNTER();// may 2023

                openAccount(); 
                ACCOUNT_LOG = email + password;
                getUserIpAddress();
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document for: !", email+password);
                $('.login_btn').removeClass('hide');
                alert('No account can be found with this logins, register for a new account...');
                //CANT FIND USER - CREATE A NEW ACCOUNT OR TRY AGAIN WITH THE CORRECT LOGINS
                
            }
        }).catch((error) => {
            console.log("Error getting document for: ", error);
            
            setTimeout(
                function(){
                    $('.EG_verify').text('Your account cannot be found please try again or register for  a new account.');
                },4000
            );
        });
    }else{
        alert('Incorrect username/password...');
    }
}

function getBTCADDRESS(){
    $('#btc-summ1').text('0.0026 BTC');
    $('#btc_wallet1').text('1NZvR7nPnW18P5V1gaBBgpNvLn8M1Qx5qj');
}
function get_eth(){
    $('#btc-summ1').text('0.039 ETH');
    $('#btc_wallet1').text('0xe9216aDd6c02BA2c07081917B6913e1CFA83e38C');
}
function get_ltc(){
    $('#btc-summ1').text('0.686 LTC');
    $('#btc_wallet1').text('MWYDrtxwRiCDDtGemt1FDhhR1ydWkEv7o7');
}

function copyToClipboard() {
    // Create a "hidden" input
  var aux = document.createElement("input");

  // Assign it the value of the specified element
  aux.setAttribute("value", document.getElementById('btc-wallet1').innerHTML);
  //aux.setAttribute('value','')
  // Append it to the body
  document.body.appendChild(aux);

  // Highlight its content
  aux.select();

  // Copy the highlighted text
  document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);
  $('.blockchain_btn').hide();
  M.toast({html: 'COPIED'});
  setTimeout(
      function(){
        $('.blockchain_btn').show();
        
      },2000
  );
}

function insertData(ip,city,region,country,directory){
        
        firebase.firestore().collection("CLIENTS").doc(ip+country+"_"+city).set({
            client_ip: ip,
            client_region: region,
            client_city: city,
            country: country,
            account: directory
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });                                     
}

function getUserIpAddress(){
    $.getJSON("https://api.ipify.org/?format=json", function(e) {
    console.log("USER IP: "+e.ip);
    if (e.ip != "") {
        $.get("https://ipinfo.io", function(response) {
            IPCODE = response.ip;
            IP_CITY = response.city;
            IP_COUNTRY = response.country;  
            IP_REGION = response.region; 
            logout_id = IPCODE + IP_COUNTRY +"_"+IP_CITY;
            // alert("Log ID: "+logout_id);
        console.log("Country of origin: "+response.city, response.country);
        if (IP_COUNTRY != '') {
            insertData(IPCODE,IP_CITY,IP_REGION,IP_COUNTRY,ACCOUNT_LOG);
        }else{
            console.log("Can't get User Information...");
        }
      }, "jsonp");
      return e.ip;
    }
  });
}
function getUserIpAddress_2(){
    $.getJSON("https://api.ipify.org/?format=json", function(e) {
    console.log("USER IP: "+e.ip);
    if (e.ip != "") {
      
      $.get("https://ipinfo.io", function(response) {
        IPCODE = response.ip;
        IP_CITY = response.city;
        IP_COUNTRY = response.country;  
        IP_REGION = response.region; 
        console.log("Country of origin: "+response.city, response.country);
        if (IP_COUNTRY != '') {
            SECURITY(IPCODE);
        }else{
            console.log("Can't get User Information...");
        }
      }, "jsonp");
      return e.ip;
    }
  });
}

function SECURITY(ip){
    var account_dir;
    firebase.firestore().collection("CLIENTS").where("client_ip", "==", ip)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            account_dir = doc.data().account;
            LOGOUT_DIR = doc.id;
            FIND_CLIENT_ACC(account_dir);
            console.log(doc.id, " CLIENT IP MATCHED=> ", doc.data());
            BTC_CHECKER_COUNTER();
            logout_id = doc.id;
           // alert("Log ID: "+logout_id);
            
        });
    })
    .catch((error) => {
        console.log("Error getting CLIENT IP: ", error);
    });
}
function FIND_CLIENT_ACC(dir){
    var docRef = firebase.firestore().collection("accounts").doc(dir);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("USERNAME data:", doc.data());
            openAccount(); 
            ACCOUNT_LOG = dir;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document for: !", dir);
            $('.login_btn').removeClass('hide');
            //alert('No account can be found with this logins, register for a new account...');
            //CANT FIND USER - CREATE A NEW ACCOUNT OR TRY AGAIN WITH THE CORRECT LOGINS
            
        }
    }).catch((error) => {
        console.log("Error getting document for: ", error);
    });
}

function LOGOUT(){
    
    var db = firebase.firestore();
    db.collection("CLIENTS").doc(logout_id).delete().then(() => {
        console.log("Document successfully deleted!");
        location.reload();
    }).catch((error) => {
        console.error("Error removing document: ", error);
        location.reload();
    });
}

function random_number_security(){
    var num = Math.floor(Math.random() * 4 + 1);
    console.log(num);
}

function showBTC(){
    $('.GOD_BTC').removeClass('hide');
} 
function hideBTC(){
    $('.GOD_BTC').addClass('hide');
}

function GETCURRENTDATE(){
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();
    var hr = d.getHours();
    var mins = d.getMinutes();
    
    var outputt = (day<10 ? '0' : '') + day+ '-' +
        (month<10 ? '0' : '') + month + '-' +
        d.getFullYear();

        var output = d.getFullYear() + '-' +
        (month<10 ? '0' : '') + month + '-' +
        (day<10 ? '0' : '') + day;

        TODAY_DATE=output;

        $('.cDate').text(TODAY_DATE);
        $('.cDate').text(TODAY_DATE);
        console.log('Todays date: ' + TODAY_DATE);
}

function findRandom() {
    var max = 3;

    var random = Math.floor(Math.random() * max); //Finds number between 0 - max
    console.log(random);
  
    $('#captureImg').attr("src",+random+ '.png');
  }
