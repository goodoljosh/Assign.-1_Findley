function validateForm() {
  var x = document.forms["myForm"]["pwd"].value;
  if (x < "{8}") {
    alert("Password is not long enough");
    return false;
  }
}