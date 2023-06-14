import validator from "validator"

export const validateData = (data: any) : string => {
    console.log(data.password.length)
    if(!validator.isEmail(data.email)){
      return "Please enter a valid e-mail address."
    }

    if(!data.name){
      return "Name of user is required."
    }

    if(data.password !== data.confirmPassword){
      return "Passwords do not match."
    }

    if(data.password.length < 7){
      return 'Password can not be less than 7 characters.'
    }

    if(data.password.toLowerCase().includes('password')){
      return "Password can not contain the word 'password'!"
    }

    return ""
  }