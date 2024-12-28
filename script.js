document.querySelector(".main .right form").addEventListener("submit" , function(event){
    event.preventDefault()
    const firstName = document.getElementById("first-name").value.trim()
    const lastName = document.getElementById("last-name").value.trim()
    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value.trim()
    document.querySelectorAll(".main .right form .error").forEach((error) => {
        error.textContent = ""
    })
    let isValid = true
    if (firstName === "") {
        document.querySelector("#fnameError").textContent = "First name is required."
        isValid = false
    }
      if (lastName === "") {
        document.querySelector("#lnameError").textContent = "Last name is required."
        isValid = false
    }
      if (email === "") {
        document.querySelector("#emailError").textContent = "Email is required."
        isValid = false
    } else if (!validateEmail(email)) {
        document.querySelector("#emailError").textContent = "Please enter a valid email address."
        isValid = false
    }
      if (password === "") {
        document.querySelector("#passwordError").textContent = "Password is required."
        isValid = false
    } else if (password.length < 6) {
        document.querySelector("#passwordError").textContent = "Password must be at least 6 characters long."
        isValid = false
    }
    if (isValid) {
        alert("Form submitted successfully!")
    }
})



function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email)
}