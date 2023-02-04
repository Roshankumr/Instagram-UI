function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&&password==12345){
        // alert("login successfully")
        window.location.replace("homepage.html");
        
    }
    else{
        // alert("oops! login failed");
        window.location.replace("404.html");
        return false;
    }
}



function seterror(id, error){
    Element=document,getElementById(id);
    Element=getElementsByClassName('formerror')[0].innerHTML=error;

}
function validateForm(){
    var returnval=true;
    var text=document.forms['myForm']['text'].value;
    if(text.length<5){
        seterror("username", "length is too sort");
        returnval=false;

    }

    if(text.length==0){
        seterror("username", "oops! please fill this feild!");
        returnval=false;

    }
    return returnval;

}