'use strict';

/*============== Contact Info ==============*/


function getContactInfo() {
    foodData.innerHTML = `
    <div class="w-100 bg-danger d-flex position-relative ">
      <button id="reload" class="btn  reload position-absolute  border-2 border-danger text-danger">Reload</button>
    </div>
    <div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameEntry" onkeyup="validationCheck()" type="text" class="form-control" placeholder=" Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="EmailEntry" onkeyup="validationCheck()" type="email" class="form-control " placeholder="Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneNumEntry" onkeyup="validationCheck()" type="text" class="form-control " placeholder="Phone Num">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageEntry" onkeyup="validationCheck()" type="number" class="form-control " placeholder="Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input  id="passwordEntry" onkeyup="validationCheck()" type="password" class="form-control " placeholder="Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input  id="reEnterPasswordEntry" onkeyup="validationCheck()" type="password" class="form-control " placeholder="Re-Enter Your Password">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="subButton" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div> `
    subButton = document.getElementById("subButton")


    document.getElementById("nameEntry").addEventListener("focus", () => {
        nameEntryTouched = true
    })

    document.getElementById("EmailEntry").addEventListener("focus", () => {
        EmailEntryTouched = true
    })

    document.getElementById("phoneNumEntry").addEventListener("focus", () => {
        phoneNumEntryTouched = true
    })

    document.getElementById("ageEntry").addEventListener("focus", () => {
        ageEntryTouched = true
    })

    document.getElementById("passwordEntry").addEventListener("focus", () => {
        passwordEntryTouched = true
    })

    document.getElementById("reEnterPasswordEntry").addEventListener("focus", () => {
        reEnterPasswordEntryTouched = true
    })
}

let nameEntryTouched = false;
let EmailEntryTouched = false;
let phoneNumEntryTouched = false;
let ageEntryTouched = false;
let passwordEntryTouched = false;
let reEnterPasswordEntryTouched = false;





function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameEntry").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("EmailEntry").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneNumEntry").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageEntry").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordEntry").value))
}

function repasswordValidation() {
   
        return document.getElementById("repasswordInput").value === document.getElementById("passwordInput").value
    
}


function validationCheck() {
    if (nameEntryTouched) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (EmailEntryTouched) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneNumEntryTouched) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageEntryTouched) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordEntryTouched) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (reEnterPasswordEntryTouched) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        subButton.removeAttribute("disabled")
    } else {
        subButton.setAttribute("disabled", true)
    }
}