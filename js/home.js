let userName=document.getElementById("userName");
let logOutBtn=document.getElementById("logOutBtn");

const open= document.getElementById("open")
const close= document.getElementById("close")
const container= document.querySelector(".container")

const notes = JSON.parse(localStorage.getItem("notes"));

if(notes){
    notes.forEach(note => addNewNote(note))
}


if(localStorage.getItem("username")){
    userName.innerHTML=`Welcome ${localStorage.getItem("username")}`
}

function logout(){
    window.location.href='index.html';
    localStorage.removeItem("username");
}

logOutBtn.addEventListener("click",logout);

open.addEventListener("click",()=>container.classList.add("show-nav"));
close.addEventListener("click",()=>container.classList.remove("show-nav"));



function addNewNote(text="") {
    const note = document.createElement("div");
    note.classList.add("note");
  
    note.innerHTML = `
      <div class="tools">
          <button class="edit"><i class="fas fa-edit"></i></button>
          <button class="delete"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="main hidden"></div>
      <textarea></textarea>
    `;
  
    const editBtn =note.querySelector(".edit");
    const deleteBtn =note.querySelector(".delete");
    const main =note.querySelector(".main");
    const textArea =note.querySelector("textarea");


    textArea.value=text;
    main.innerHTML= marked(text)

    deleteBtn.addEventListener("click",()=>{
        note.remove();
        updateNote();
    })
    editBtn.addEventListener("click",()=>{
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    })

    note.style.backgroundColor = "#fff";
  
    note.style.width = "300px";
    note.style.height = "400px";
  
    note.style.boxShadow = "0 0 10px 4px rgba(0, 0, 0, 0.1)";
  

    textArea.addEventListener("input", (e)=>{
        const {value} =e.target;
        main.innerHTML=marked(value);

        updateNote();
    })
    document.querySelector(".content").appendChild(note);
  }

  const addBtn = document.getElementById("add");
  addBtn.addEventListener("click", ()=>addNewNote());
  

function updateNote(){
    const notesText = document.querySelectorAll("textarea");
    const notes=[];

    notesText.forEach(note=>notes.push(note.value));

    localStorage.setItem("notes", JSON.stringify(notes));

//     localStorage.setItem("name", JSON.stringify());
// JSON.parse(localStorage.getItem("name"));
// localStorage.removeItem("name");
}