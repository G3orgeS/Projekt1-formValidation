const form = document.querySelector('#validationForm'); 

const firstName = document.querySelector('#firstName'); 
const lastName = document.querySelector('#lastName');  
const email = document.querySelector('#email'); 
const password = document.querySelector('#password'); 
const repeatPassword = document.querySelector('#repeatPassword'); 
const checkbox = document.querySelector('#terms'); 
const fel = document.querySelector('#errorMessage');

const validateFirstName = (input) => {
    
    let noNum = /\d/; // regEx, inga siffror

    if (input.value.trim() === "") { // kontrollerar att input inte är tom
        // console.log("Skriv in ditt förnamn")
        return Errors() 
    }
    else if (input.value.length < 2) { // kontrollera att input är mer än 2 chars
        console.log('Ditt namn måste innehålla 2 bokstäver')
        return Errors()
    }
    else if (noNum.test(input.value)) { // inga siffror i namnet 
        console.log('Det kan inte vara några siffror i namnet')
    }
    else {
        return Success()
 
    }
}

const validateLastName = (input) => {

    let noNum = /\d/; // regEx, inga siffror

    if (input.value.trim() == "") { // kontrollerar att input inte är tom
        // console.log("Skriv in ditt efternamn")
        return Errors()
    }
    else if (input.value.length < 2) { // kontrollera att input är mer än 2 chars
        console.log('Ditt efternamn måste innehålla 2 bokstäver')
        return Errors()
    }
    else if (noNum.test(input.value)) { // inga siffror i namnet 
        console.log('Det kan inte vara några siffror i namnet')
    }
    else {
        return Success()
    }
}

const validateEmail = (input) => {

    let validEmailAddress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ // regEx, mail
    
    if (input.value.trim() == "") { // kontrollerar att input inte är tom
        console.log("skriv in din mail")
        return Errors()
    }
    else if (validEmailAddress.test(input)) { // jämför inputen med regEx
        console.log("skriv in en korrekt mail")
        return Errors()
    }
    else {
        return Success()
    }
}


const passwordValidation = (input) => {

    let validPassword = /^[\w-.]+@([\w-]+.)+[\w-]{2,6}$/ // regEx, lösenord
// lösenordsexempel för test: Hejdå123!
    if (input.value.trim() == "") { // kontrollerar att input inte är tom
        console.log("skriv in ett lösenord")
        return Errors()
    }
    else if (validPassword.test(input.value)) { // jämför inputen med regEx
        console.log("lösen måste ha stor bokstav, liten bokstav, siffra, specialnummer och vara 8 tecken")
        return Errors()
    }
    else if (repeatPassword.value.trim() == '') { // kontrollerar att input inte är tom
        console.log('bekräfta lösenordet')
        return Errors()
    }
    else if (input.value !== repeatPassword.value) { // jämför första inputen med andra inputen
        console.log("lösenorden matchar inte")
        return Errors()
    }
    else {
        return Success()
    }
}

const validateCheckbox = () => {
    if (checkbox.checked) { // kolla om checkboxen är itryckt 
        return Success()
    }
    else {
        console.log(false)
        return Errors()
    }
}

const Success = () => {
    return true
}

const Errors = () => {
    return false
}

form.addEventListener('submit', e => {
    // förhindrar sidan att laddas om när formuläret valideras
    e.preventDefault();

    validateFirstName(firstName)
    validateLastName(lastName)

    if  (validateFirstName(firstName) &&
        validateLastName(lastName) &&
        validateEmail(email) &&
        passwordValidation(password) &&
        validateCheckbox(checkbox)) {
// skriva ut ett success meddelande
const userArray = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value
}

console.log('Formuläret är korrekt ifyllt')
console.log(userArray)
            fel.classList.add('d-none')
    } 
    else {
            console.log('Formuläret är inte korrekt ifyllt')
            fel.classList.remove('d-none')
    }



}
) // förhindrar formuläret från att ladda om