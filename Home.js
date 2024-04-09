const txtSub1Title = document.getElementById("Sub1Title");
const txtSub1para = document.getElementById("Sub1para");
const txtSub2Title = document.getElementById("Sub2Title");
const txtSub2para1 = document.getElementById("Sub2para1");
const txtSub2para2 = document.getElementById("Sub2para2");
const txtSub3Title = document.getElementById("Sub3Title");
const txtSub3para1 = document.getElementById("Sub3para1");
const txtSub3para2 = document.getElementById("Sub3para2");
const txtSub4Title = document.getElementById("Sub4Title");
const txtSub4para1 = document.getElementById("Sub4para1");
const txtSub4para2 = document.getElementById("Sub4para2");
const txtSub5Title = document.getElementById("Sub5Title");

let directory;


function local() {
   fetch('Home.json')
       .then(res => res.json())
       .then(data => {
         localStorage.setItem('HomeData', JSON.stringify(data));
         console.log('Data stored in localStorage successfully!');
         processData()
     })
}

local()




let loginData;

function editUser() {
   loginData = JSON.parse(localStorage.getItem('loginData'));
   const loggedInUser = loginData.user.log || loginData.admin.log;
   const editButton = document.getElementById("editButton");

   if (loggedInUser) {
       editButton.style.display = "block";
   } else {
       editButton.style.display = "none";
   }
}

editUser()

function subAdmin(){
   loginData = JSON.parse(localStorage.getItem('loginData'));
   const subButton = document.getElementById("subButton")
   const viewButton = document.getElementById("viewButton")
   let check = loginData.admin.log === true && loginData.admin.username === "admin"
   if(check){
      subButton.style.display = "none"
      viewButton.style.display = "block"
      
   } else if(loginData.user.log === true && loginData.user.username === "user"){
      subButton.style.display = "block"
      viewButton.style.display = "none"
   } else {
      subButton.style.display = "none"
      viewButton.style.display = "none"
   }
}
subAdmin()
const logout = document.getElementById("logoutButton")
logout.addEventListener("click",subAdmin)

function LogOut() {
   loginData = JSON.parse(localStorage.getItem('loginData'));
   loginData.user.log = false
   loginData.admin.log = false
   localStorage.setItem('loginData', JSON.stringify(loginData));
   editUser()
}



function processData(){
   directory = JSON.parse(localStorage.getItem('HomeData'));
   txtSub1Title.innerHTML = (directory.Main.Title);
   txtSub1para.innerHTML = (directory.Main.Description);
   txtSub2Title.innerHTML = (directory.Body[0].Title);
   txtSub2para1.innerHTML = (directory.Body[0].Description1);
   txtSub2para2.innerHTML = (directory.Body[0].Description2);
   txtSub3Title.innerHTML = (directory.Body[1].Title);
   txtSub3para1.innerHTML = (directory.Body[1].Description1);
   txtSub3para2.innerHTML = (directory.Body[1].Description2);
   txtSub4Title.innerHTML = (directory.Body[2].Title);
   txtSub4para1.innerHTML = (directory.Body[2].Description1);
   txtSub4para2.innerHTML = (directory.Body[2].Description2);
   txtSub5Title.innerHTML = (directory.Smain.Title);
}  

function openEditor() {
   document.getElementById('editorPopup').style.display = 'block';
   loadContent();
}

function loadContent() {
   var selectedElementId = document.getElementById('elementSelector').value;
   var content = document.getElementById(selectedElementId).innerText;
   document.getElementById('editedContent').value = content;
   console.log("loadContent")
}

function saveChanges() {
   var editedContent = document.getElementById('editedContent').value;
   var selectedElementId = document.getElementById('elementSelector').value;
   document.getElementById(selectedElementId).innerText = editedContent;
   localStorage.setItem(selectedElementId, editedContent);
   document.getElementById('editorPopup').style.display = 'none';
   console.log("saveChanges")
}









