//////////////////////////////    TO DISPLAY REGISTRATION FORM AND HIDE HOME PAGE    ////////////////////////

function join() {
    let login = document.querySelector(".register");
    let click = document.querySelector(".container")
    click.style.display = "none"
    login.style.display = "block"
}


///////////////////////////////////    REGISTRATION FORM VALIDATION    //////////////////////////////


function validate() {
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let EmailInput = document.getElementById('E-mail').value
    let PhoneInput = document.getElementById('Phone').value
    let batchInput = document.getElementById('batch').value
    let moduleInput = document.getElementById('module').value
    let login = document.querySelector(".register");
    let click = document.querySelector(".container")
    let thanks = document.querySelector(".last");
     let validationString = /^[A-Za-z ]+$/
    var boolien1 = false;
    var boolien2 = false;
    var boolien3 = false;
    var boolien4 = false;
    var boolien5 = false;
    var boolien6 = false;
    var boolien7 = false;

    if (firstNameInput && firstNameInput.length <=25 && firstNameInput.match(validationString) && firstNameInput.indexOf(" ")!=0) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById("first-name-invalid").style.display = "none";
        boolien1 = true;
    }
    else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById("first-name-valid").style.display = "none";
        boolien1 = false;
    }
    if (lastNameInput && lastNameInput.length <=20 && lastNameInput.match(validationString) && lastNameInput.indexOf(" ")!=0) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById("last-name-invalid").style.display = "none";
        boolien2 = true;
    }
    else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById("last-name-valid").style.display = "none";
        boolien2 = false;
    }
    if (batchInput) {
        document.getElementById('batch-valid').style.display = 'block'
        document.getElementById("batch-invalid").style.display = "none";
        boolien3 = true;
    }
    else {
        document.getElementById('batch-invalid').style.display = 'block'
        document.getElementById("batch-valid").style.display = "none";
        boolien3 = false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(EmailInput)) {
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById("email-invalid").style.display = "none";
        boolien4 = true;
    }
    else {
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById("email-valid").style.display = "none";
        boolien4 = false;
    }
    const regexExp = /^[6-9]\d{9}$/gi;
    if (PhoneInput.length == 10 && regexExp.test(PhoneInput)) {
        document.getElementById('Phone-valid').style.display = 'block'
        document.getElementById("Phone-invalid").style.display = "none";
        boolien5 = true;
    }
    else {
        document.getElementById('Phone-invalid').style.display = 'block'
        document.getElementById("Phone-valid").style.display = "none";
        boolien5 = false;
    }
    
    if (moduleInput) {
        document.getElementById('module-valid').style.display = 'block'
        document.getElementById("module-invalid").style.display = "none";
        boolien6 = true;
    }
    else {
        document.getElementById('module-invalid').style.display = 'block'
        document.getElementById("module-valid").style.display = "none";
        boolien6 = false;
    }
    let tnCInput = document.getElementById("tnC").checked;
    if (tnCInput) {
        document.getElementById("tnC-valid").style.display = "block";
        document.getElementById("tnC-invalid").style.display = "none";
        boolien7 = true;
    } else {
        document.getElementById("tnC-invalid").style.display = "block";
        document.getElementById("tnC-valid").style.display = "none";
        boolien7 = false;
    }
    if (boolien1 && boolien2 && boolien3 && boolien4 && boolien5 && boolien6 && boolien7) {
        thanks.style.display = "block"
        login.style.display = "none"
    }
}


////////////////////////    REFRESH/RESET EVERY VALUE AFTER GOING TO HOME PAGE     /////////////////////


function home() {
    let home = document.querySelector(".container");
    let thanks = document.querySelector(".last")
    let register = document.querySelector(".register")
    home.style.display = "block"
    thanks.style.display = "none"
    register.style.display = "none"
    let firstNameInput = document.getElementById('first-name').value=''
    let lastNameInput = document.getElementById('last-name').value=''
    let EmailInput = document.getElementById('E-mail').value=''
    let PhoneInput = document.getElementById('Phone').value=''
    let batchInput = document.getElementById('batch').value=''
    let moduleInput = document.getElementById('module').value=''
    document.getElementById('first-name-valid').style.display = 'none'
    document.getElementById("first-name-invalid").style.display = "none";
    document.getElementById('last-name-valid').style.display = 'none'
    document.getElementById("last-name-invalid").style.display = "none";
    document.getElementById('batch-valid').style.display = 'none'
    document.getElementById("batch-invalid").style.display = "none";
    document.getElementById('email-valid').style.display = 'none'
    document.getElementById("email-invalid").style.display = "none";
    document.getElementById('Phone-valid').style.display = 'none'
    document.getElementById("Phone-invalid").style.display = "none";
    document.getElementById("tnC-valid").style.display = "none";
    document.getElementById("tnC-invalid").style.display = "none";
    document.getElementById('module-valid').style.display = 'none'
    document.getElementById("module-invalid").style.display = "none";
    document.getElementById('tnC').checked = false;
    boolien1 = false;
    boolien2 = false;
    boolien3 = false;
    boolien4 = false;
    boolien5 = false;
    boolien6 = false;
    boolien7 = false;
}
function agree(){
    document.querySelector(".terms_and_conditions").style.display='block';
    document.querySelector(".register").style.display='none';
    document.querySelector(".container").style.display='none';
    document.querySelector(".last").style.display='none';
}
function regPage(){
    document.querySelector(".terms_and_conditions").style.display='none';
    document.querySelector(".register").style.display='block';
    document.querySelector(".container").style.display='none';
    document.querySelector(".last").style.display='none';
}