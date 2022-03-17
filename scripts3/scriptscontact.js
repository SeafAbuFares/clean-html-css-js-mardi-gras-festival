
function validateForm() {
    var firstN =document.forms["myForm"]["fName"].value;
    var lastN =document.forms["myForm"]["lName"].value;
    var emailA =document.forms["myForm"]["emailAdd"].value;
    var textA =document.forms["myForm"]["exampleFormControlTextarea1"].value;
    if (firstN=="") {
        swal("Oops", "YOU NEED TO FILL ALL THE FORM!", "error");
    }
    else if (lastN=="") {
        swal("Oops", "YOU NEED TO FILL ALL THE FORM!", "error");
    }
    else if (emailA=="") {
        swal("Oops", "YOU NEED TO FILL ALL THE FORM!", "error");
    }
    else if (textA=="") {
        swal("Oops", "YOU NEED TO FILL ALL THE FORM!", "error");
    }
    else{
        
    }
}





