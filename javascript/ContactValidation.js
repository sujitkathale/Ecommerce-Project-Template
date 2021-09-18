let namenode=document.getElementById("name");
let errornode1=document.getElementById("error1");

let emailnode=document.getElementById("email");
let errornode2=document.getElementById("error2");

let subjectnode=document.getElementById("subject");
let errornode3=document.getElementById("error3");

let messagenode=document.getElementById("message");
let errornode4=document.getElementById("error4");

function validate1(){
    errornode1.innerHTML="";
    let fname=namenode.value;
    if(fname=="")
    {
        errornode1.innerHTML="This field is required";
        namenode.style.border="2px solid red";
        return false;
    }
    else if(fname.length<5)
    {
        errornode1.innerHTML="name contains atleast 5 character";
        namenode.style.border="2px solid red";
        return false;
    }
    else{
        namenode.style.border="2px solid green";
        return true;
    }
}

function validate2()
{
    errornode2.innerHTML="";
    let email=emailnode.value;
    let ss=email.substring(email.indexOf("@")+1);
    if(email=="")
    {
        errornode2.innerHTML="This field is required";
        emailnode.style.border="2px solid red";
        return false;
    } 
    else if(!email.includes("@")||ss==""){
        errornode2.innerHTML="Please put valid email id";
        emailnode.style.border="2px solid red";
        return false;
    } 
    else{
        emailnode.style.border="2px solid green";
        return true;
    }
}

function validate3(){
    errornode3.innerHTML="";
    let sub=subjectnode.value;
    if(sub=="")
    {
        errornode3.innerHTML="This field is required";
        subjectnode.style.border="2px solid red";
        return false;
    }
    else if(sub.length<10)
    {
        errornode3.innerHTML="name contains atleast 5 character";
        subjectnode.style.border="2px solid red";
        return false;
    }
    else{
        subjectnode.style.border="2px solid green";
        return true;
    }
}

function validate4(){
    errornode4.innerHTML="";
    let msg=messagenode.value;
    if(msg=="")
    {
        errornode4.innerHTML="This field is required";
        messagenode.style.border="2px solid red";
        return false;
    }
    else if(msg.length<50)
    {
        errornode4.innerHTML="name contains atleast 5 character";
        messagenode.style.border="2px solid red";
        return false;
    }
    else{
        messagenode.style.border="2px solid green";
        return true;
    }
}

function validateForm(){
    let state1=validate1();
    let state2=validate2();
    let state3=validate3();
    let state4=validate4();
    return(state1 && state2 && state3 && state4);
}


