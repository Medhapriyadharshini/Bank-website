function Getstarted() {
    window.location = "./register.html"
}


function register() {

    // 1.fetch the values from the html
    acno = reg_acno.value
    uname = reg_uname.value
    pswd = reg_pswd.value

    console.log(acno, uname, pswd);

    // 2.create accnoDetails object
    accountDetails = {
        acno,
        uname,
        pswd
    }

    // 3. to Check if acno is already present in localstorage
    if (acno in localStorage) {
        alert("User Already Exists!")
    }

    // set details in localstorage
    else {
        localStorage.setItem(acno, JSON.stringify(accountDetails))
        alert("Registration Completed Successfully!")

        window.location = "./login.html"
    }

}
// fetch the details from html
function login() {
    acno = acntno.value;
    pswd = login_pswd.value;

    if (acno in localStorage) {
        accountDetails = JSON.parse(localStorage.getItem(acno))
        if (pswd == accountDetails.pswd) {
            alert("Login Successfull")
            window.location = "./home.html"
        }
        else {
            alert("Incorrect Password!")
        }
    }
    else {
        alert("Invalid Account Number!")
    }
}




//  Deposite

let balance = 0;
let amount = 0;
let withdraw = 0;
let totalBalance = 0;
let pswd = '';

counter = 0;

function deposite() {
    amnt = deposite_amount.value
    pswd = deposite_pswd.value

    amnt = Math.floor(amnt);
    balance += amnt;

    if (pswd in localStorage) {
        accountDetails = JSON.parse(localStorage.getItem(pswd))
        if (pswd == accountDetails.pswd && amnt <= 0) {
            alert("value cannot be empty or negative")
        }
        else {
            localStorage.setItem(balance, JSON.stringify(accountDetails))
            alert("Your Amount is successfully added!")
            document.getElementById("account_balance").innerHTML = `<div class="text-center text-light bg-success" style="font-weight:500">Your Current Balance : ${balance}</div>`
        }
    }
    else { "Incorrect Password!" }
}


function withdrawcash() {
    amntwithdraw = withdraw_amount.value
    pswdwithdraw = withdraw_pswd.value

    amntwithdraw = Math.floor(amntwithdraw);
    balance -= amntwithdraw;

    if (amntwithdraw == "" || pswdwithdraw == "") {
        alert("please fill all the details")
    }
    else if (pswdwithdraw == pswd) {
        if (amntwithdraw <200) {
            alert("withdrawal amount must be atleast 200rs")
        }
        else if(amntwithdraw<balance) {
                alert("insuccifient balance")
        }
            else{
            localStorage.setItem(balance, JSON.stringify(accountDetails))
            alert("Your Amount is successfully Withdrawed!")
            document.getElementById("withdraw_balance").innerHTML = `<div class="text-center text-light bg-success" style="font-weight:500">Your Current Balance : ${balance}</div>`
           
        }
    }
else {
    alert("Invalid password")
}
}



