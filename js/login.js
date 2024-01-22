let loginEmail=document.getElementById("loginEmail");
let loginPassword=document.getElementById("loginPassword");
let btnLogin=document.getElementById("btnLogin");
let alertMsg=document.getElementById("alertMsg");

let infoList=[];

if(localStorage.getItem("users")){
    infoList=JSON.parse(localStorage.getItem("users"));
}
function login(){
    if(checkInputsEmpty()==true){
        getAlertMsg("Email and password are required","red");
    }else{
        if(checkEmailPass()==true){
            window.location.href='home.html';
        }else{
            getAlertMsg("Email or password is not correct","red");
        }
    }
}

function checkEmailPass(){
    for (let i = 0; i < infoList.length; i++) {
        if(infoList[i].Email == loginEmail.value && infoList[i].Password == loginPassword.value){
            localStorage.setItem("username",infoList[i].Username);
            return true;
        }
    }
}

function getAlertMsg(text,color){
    alertMsg.innerHTML=text;
    alertMsg.style.color=color;
}


function checkInputsEmpty(){
    if(loginEmail.value=="" || loginPassword.value==""){
        return true;
    }else{
        return false;
    }
}
btnLogin.addEventListener("click",login)