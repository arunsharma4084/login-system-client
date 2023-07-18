import validator from "validator"

export const validateSignUpData = (data: any) : string => {
    if(!validator.isEmail(data.email)){
      return "Please enter a valid e-mail address."
    }

    if(!data.username){
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

export const validateResetPasswordData = (data: any) : string => {

  if(data.newPassword !== data.confirmNewPassword){
    return "Passwords do not match."
  }

  if(data.newPassword.length < 7){
    return 'Password can not be less than 7 characters.'
  }

  if(data.newPassword.toLowerCase().includes('password')){
    return "Password can not contain the word 'password'!"
  }

  return ""
}