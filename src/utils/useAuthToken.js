import { useState } from "react"

export default function useAuthToken() {
    const getAuthToken = () => {
      const tokenString = localStorage.getItem('token');
      const authToken = JSON.parse(tokenString);
      return authToken
    }
  
    const [authToken, setAuthToken] = useState(getAuthToken());
  
    const saveAuthToken = (authToken) => {
      localStorage.setItem('token', JSON.stringify(authToken));
      setAuthToken(authToken);
    };
  
    console.log(authToken)
    return {
      setAuthToken: saveAuthToken,
      authToken
    }
}