const txtSub1Title = document.getElementById("Sub1Title");
const txtSub1para = document.getElementById("Sub1para");
const txtSub2Title = document.getElementById("Sub2Title");
const txtSub3Title = document.getElementById("Sub3Title");
const txtSub3para1 = document.getElementById("Sub3para1");
const txtSub3para2 = document.getElementById("Sub3para2");
const txtSub4Title = document.getElementById("Sub4Title");
const txtSub4para1 = document.getElementById("Sub4para1");
const txtSub4para2 = document.getElementById("Sub4para2");
const txtSub5Title = document.getElementById("Sub5Title");
const txtSub5para = document.getElementById("Sub5para");
const txtSub6Title = document.getElementById("Sub6Title");
const txtSub7Title = document.getElementById("Sub7Title");
const txtSub7para = document.getElementById("Sub7para");
const txtSub8Title = document.getElementById("Sub8Title");
const txtSub8para = document.getElementById("Sub8para");
const txtSub9Title = document.getElementById("Sub9Title");
const txtSub9para = document.getElementById("Sub9para");
const txtSub10Title = document.getElementById("Sub10Title");
const txtSub10para = document.getElementById("Sub10para");
const txtSub11Title = document.getElementById("Sub11Title");
const txtSub11para = document.getElementById("Sub11para");
const txtSub12Title = document.getElementById("Sub12Title");
const txtSub12para = document.getElementById("Sub12para");


let directory;

function local() {
   fetch('Sri Lankan leopard.json')
       .then(res => res.json())
       .then(data => {
         localStorage.setItem('LeopardData', JSON.stringify(data));
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

function LogOut() {
   loginData = JSON.parse(localStorage.getItem('loginData'));
   loginData.user.log = false
   loginData.admin.log = false
   localStorage.setItem('loginData', JSON.stringify(loginData));
   editUser()
}


function processData(){
   directory = JSON.parse(localStorage.getItem('LeopardData'));;
   txtSub1Title.innerHTML = (directory.Main.Title);
   txtSub1para.innerHTML = (directory.Main.Description)
   txtSub2Title.innerHTML = (directory.Body[0].Title);
   txtSub3Title.innerHTML = (directory.Body[1].Title);
   txtSub3para1.innerHTML = (directory.Body[1].Description1);
   txtSub3para2.innerHTML = (directory.Body[1].Description2);
   txtSub4Title.innerHTML = (directory.Body[2].Title);
   txtSub4para1.innerHTML = (directory.Body[2].Description1);
   txtSub4para2.innerHTML = (directory.Body[2].Description2);
   txtSub5Title.innerHTML = (directory.Body[3].Title);
   txtSub5para.innerHTML = (directory.Body[3].Description);
   txtSub6Title.innerHTML = (directory.End[0].Title);
   txtSub7Title.innerHTML = (directory.End[1].Title);
   txtSub7para.innerHTML = (directory.End[1].Description);
   txtSub8Title.innerHTML = (directory.End[2].Title);
   txtSub8para.innerHTML = (directory.End[2].Description);
   txtSub9Title.innerHTML = (directory.End[3].Title);
   txtSub9para.innerHTML = (directory.End[3].Description);
   txtSub10Title.innerHTML = (directory.End[4].Title);
   txtSub10para.innerHTML = (directory.End[4].Description);
   txtSub11Title.innerHTML = (directory.End[5].Title);
   txtSub11para.innerHTML = (directory.End[5].Description);
   txtSub12Title.innerHTML = (directory.End[6].Title);
   txtSub12para.innerHTML = (directory.End[6].Description);
}   



