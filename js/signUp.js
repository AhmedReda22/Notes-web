let signupUsername=document.getElementById("signupUsername");
let signupEmail=document.getElementById("signupEmail");
let signupPassword=document.getElementById("signupPassword");
let btnSignup=document.getElementById("btnSignup");
let alertMsg=document.getElementById("alertMsg");

let infoList=[];

if(localStorage.getItem("users")){
    infoList=JSON.parse(localStorage.getItem("users"));
}

function signup(){
    let info={
        Username:signupUsername.value,
        Email:signupEmail.value,
        Password:signupPassword.value
    }
    if(checkInputsEmpty()==true){
        getAlertMsg("All Inputs Required","red");
    }else{
        if(checkEmail()==true){
            getAlertMsg("This email is already exist","red");
        }else{
            infoList.push(info);
            localStorage.setItem("users",JSON.stringify(infoList));
            clear()
            getAlertMsg("Success","green")
        }
    }
    
}

btnSignup.addEventListener("click",signup);

function clear(){
    signupUsername.value="";
    signupEmail.value="";
    signupPassword.value="";
}

function getAlertMsg(text,color){
    alertMsg.innerHTML=text;
    alertMsg.style.color=color;
}

function checkInputsEmpty(){
    if(signupUsername.value=="" || signupEmail.value=="" || signupPassword.value==""){
        return true;
    }else{
        return false;
    }
}

function checkEmail(){
    for(let i=0; i <infoList.length; i++){
        if(infoList[i].Email == signupEmail.value){
            return true;
        }
    }
}