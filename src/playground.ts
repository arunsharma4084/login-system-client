  // async function onFormSubmit(event: React.FormEvent) {
  //   event.preventDefault();

  //   setError("");
  //   setLoading(true)
  //   setError(validateData(signUpData));

  //   if (!error) {
  //     try {
  //       console.log(signUpData)
  //       const response = await clientAPI.post("/users", signUpData);
  //       console.log(response);
  //       setLoading(false)
  //       navigate('/login', {replace: true})
  //     } catch (e: any) {
  //       console.log("Error: ", e);
  //       if (e.response.data.code === 11000) {
  //         setError("User with this email already exists.");
  //       } else {
  //         setError("Could not create account. Please try again");
  //       }
  //       setLoading(true)
  //     }
  //   }
  // }
