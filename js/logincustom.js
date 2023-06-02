function validateForm() {


    var namea = document.forms["contactForm"]["fname"].value;
	  var emailid = document.forms["contactForm"]["femail"].value;
    var password = document.forms["contactForm"]["fpassword"].value;
    var secondpassword=document.forms["contactForm"]["rePassword"].value;  

    if (namea==null || namea=="") {
        document.getElementById('problem_txt').innerHTML = "<div class='error_color'>Username must be filled out</div>";
		    return false;
    }



  if (emailid==null || emailid=="" ){  
    document.getElementById('problem_txt').innerHTML = " <div class='error_color'>Please Enter your email id.....</div>";
    return false;  
  }
  if (emailid.indexOf('@') <= 0){  
    document.getElementById('problem_txt').innerHTML = " <div class='error_color'>@invalid email-id...Please Enter valid email-id....</div>";
    return false;  
  }
  if ((emailid.charAt(emailid.length-4) != '.') && (emailid.charAt(emailid.length-3) != '.')){  
    document.getElementById('problem_txt').innerHTML = " <div class='error_color'>.invalid Email Id....</div>";
    return false;  
  }


  if (password==null || password=="" ) {
    document.getElementById('problem_txt').innerHTML = " <div class='error_color'>Please Enter Password</div>";
    return false;
  }
  if (secondpassword==null || secondpassword=="" ) {
    document.getElementById('problem_txt').innerHTML = " <div class='error_color'>Please Enter Re-password</div>";
    return false;
  }
  if( password!=secondpassword ){  
    document.getElementById('problem_txt').innerHTML = " <div class='error_color'>password must be same!</div>";
    return false;  
    }  
  alert("Form Submitted Successfully!");
	    return true;

}


