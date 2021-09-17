   var check = function() 
   {
    if (document.getElementById('put1').value =="admin" && document.getElementById('put2').value=="admin") {
 
      alert("Login succeeded as Admin :)");
      location.href="AdminPage.html";
    }
     else if(document.getElementById('put1').value == document.getElementById('put2').value ) 
     {
        alert("Login succeeded :)");
        location.href="Home.html";
    }
    else
    {
        alert("Password is Invalid !")
        location.href="login.html";
    }
   }
  