function getvalue() {
    var fname = document.getElementById("FullName").value;
    var email = document.getElementById("Email").value;
    var number = document.getElementById("Contact").value;
    var text = document.getElementById("Text").value;

    var showData = document.getElementById("showData");
    
    showData.innerHTML("Your information Details : <BR>"+"Full Name : "+ fname +"<br>");
    showData.innerHTML("Email : "+email+"<br>");
    showData.innerHTML("Contact No : "+number+"<br>");
    showData.innerHTML("Message : "+text+"<br>");
}