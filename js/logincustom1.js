function validateForm() {


    var namea = document.forms["contactForm"]["fname"].value;
    var password = document.forms["contactForm"]["fpassword"].value;

    if (namea==null || namea=="") {
        document.getElementById('problem_txt').innerHTML = "<div class='error_color'>Username must be filled out</div>";
		    return false;
    }
  if (password==null || password=="" ) {
    document.getElementById('problem_txt').innerHTML = " <div class='error_color'>Please Enter Password</div>";
    return false;
  } 

    // if(password!=secondpassword){  
    //     return true;  
    //     }  
    //     else{  
    //     alert("password must be same!");  
    //     return false;  
    //     } 

  alert("Form Submitted Successfully!");
	    return true;
}


