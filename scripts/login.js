document.addEventListener("DOMContentLoaded", ()=>{
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container2 = document.getElementById('container2');
    
    signUpButton.addEventListener('click', () => {
      container2.classList.add("right-panel-active");
    });
    
    signInButton.addEventListener('click', () => {
      container2.classList.remove("right-panel-active");
    });
    
  //for auth button//
    document.getElementById("authSignIn").addEventListener("click", function(e){

      document.getElementById("errorMessage").style.display = "block";
  });


    });

//register new users // 
    function register() {
      return fetch(apiBaseURL + "/api/users", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "accept": "application/json"
          },
          body: JSON.stringify({
              fullName: fullName.value,
              email: email.value,
              password: password.value
          })
      }).then(() => location = "/"); 
  }
  
  registerBtn.addEventListener("click", register);  


 