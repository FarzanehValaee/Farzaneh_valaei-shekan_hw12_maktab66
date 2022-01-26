function validateForm() {
  let validateFirstname = document.forms["registerForm"]["fname"].value;
  let validateLastname  = document.forms["registerForm"]["lname"].value;
  if (!(validateFirstname)) {
    return false;
  }
  else if(!(validateLastname)){
            return false;                   
  }
  return true
}
async function delay(delayInms) {
  return new Promise(resolve  => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}
//Function To Display Popup
function div_show() {
  if(validateForm()){
    document.getElementById('popUp').style.display = "block";
    delay(80000);//waite for 8 second
  }
}
  //Function to Hide Popup
function div_hide(){
  document.getElementById('popUp').style.display = "none";
}
//__________________________________________________











