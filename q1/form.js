function validateForm() {
  let validateFirstname = document.forms["registerForm"]["fname"].value;
  let validateLastname  = document.forms["registerForm"]["lname"].value;
  switch(true) {
    case (!(validateFirstname)||!(validateLastname)):
      return false;                   
    case validateFirstname.length<=3:
      return false
    case validateLastname.length<=3:
        return false 
    default:
      return true
  }
}
async function delay(delayInms) {
  return new Promise(resolve  => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}
function returnToPreviousPage() {
  window.history.back();
}
//Function To Display Popup
function div_show() {
  if(validateForm()){
    document.getElementById('popUp').style.display = "block";
    delay(80000);//waite for 8 second
  }
  else{
    alert("validation failed false");
    returnToPreviousPage();
    return false;
  }
}
  //Function to Hide Popup
function div_hide(){
  document.getElementById('popUp').style.display = "none";
}
//__________________________________________________











