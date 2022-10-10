let Name = document.getElementById("name").value;
let Email = document.getElementById("email").value;
let Subject = document.getElementById("subject").value;
let Message = document.getElementById("message").value;

function validateForm(){

  if (4 > Name || Name > 20){
    alert("Enter a name between 4 to 20 characters");
    return;
  }

  let emailRegEx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(!emailRegEx.test(Email))
  {
  alert("Invalid Email");
  return;
  }

  if (Subject == "")
  {
    alert ("Please enter a subject");
    return;
  }



}
