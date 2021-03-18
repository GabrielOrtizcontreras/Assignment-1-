function updateDate() {
  document.getElementById("demo").innerHTML =  " " + document.lastModified;
  //alert("script worked");
}

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}