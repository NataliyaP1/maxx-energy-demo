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

