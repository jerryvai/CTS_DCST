function validateForm() {

	  var emailid = document.forms["contactForm"]["femail"].value;


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

  alert("Form Submitted Successfully!");
	    return true;
}


