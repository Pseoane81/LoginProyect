document.addEventListener("DOMContentLoaded", function() {

    const loginForm = document.getElementById("loginForm")
    const emailInput = document.getElementById("email")
    const passwordInput = document.getElementById("password")
    const confirmPasswordInput = document.getElementById("confirmPassword")
    const emailError = document.getElementById("emailError")
    const passwordError = document.getElementById("passwordError")
    const confirmPasswordError = document.getElementById("conformPasswordError")
    
    loginForm.addEventListener("submit", function(event){
        event.preventDefault()
        validateForm()

    })

    emailInput.addEventListener("blur", function(){
        validateEmail()
    })

    emailInput.addEventListener("change", function(){
        clearError(emailError)
    })

    passwordInput.addEventListener("change", function(){
        clearError(passwordError)
    })

    confirmPasswordInput.addEventListener("change", function(){
        clearError(confirmPasswordError)
    })

    function validateForm(){
        const isvalidEmail = validateEmail()
        const isvalidPassword = validatePassword()
        const passwordMatch = validatePasswordMatch()

        if (isvalidEmail && isvalidPassword && passwordMatch){
            // guardar en local storage
            alert("Has ingresado con EXITO")
        }
    }

    function validateEmail(){
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
       const emailValue = emailInput.value.trim()

       if(!emailRegex.test(emailValue)){
        showError(emailError,"Ingresa un EMAIL valido")
       return false
       }
       return true
    }

    function validatePassword(){
        const passwordValue = passwordInput.value.trim()

        if (passwordValue.length < 6){
            showError(passwordError,"Ingresa una contraseña valida")
            return false
        }
        return true
    }

    function validatePasswordMatch(){
        const passwordValue = passwordInput.value.trim()
        const confirmPasswordValue = confirmPasswordInput.value.trim()

        if (passwordValue != confirmPasswordValue ){
            showError(confirmPasswordError,"Las contraseñas no coinciden")
            return false
        }
        return true
    }

    function showError (errorElement, message){
        errorElement.innerHTML = message
        errorElement.style.display = "block"   
    }

    function clearError (errorElement,){
        errorElement.innerHTML = ""
        errorElement.style.display = "none"   
    }


})