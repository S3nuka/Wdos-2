const txtSub1Title = document.getElementById("Sub1Title");
const txtSub1para1 = document.getElementById("Sub1para");
const txtSub2Title = document.getElementById("Sub2Title");
const txtSub2para = document.getElementById("Sub2para");
const txtSub3Title = document.getElementById("Sub3Title");
const txtSub3para = document.getElementById("Sub3para");
const txtSub4Title = document.getElementById("Sub4Title");
const txtSub4para = document.getElementById("Sub4para");
const txtSub5Title = document.getElementById("Sub5Title");

let directory;

function local() {
   fetch('Animals in Sri Lanka.json')
       .then(res => res.json())
       .then(data => {
         localStorage.setItem('AnimalsData', JSON.stringify(data));
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
   directory = JSON.parse(localStorage.getItem('AnimalsData'));
   txtSub1Title.innerHTML = (directory.Main.Title);
   txtSub1para1.innerHTML = (directory.Main.Description);
   txtSub2Title.innerHTML = (directory.Body[0].Title);
   txtSub2para.innerHTML = (directory.Body[0].Description)
   txtSub3Title.innerHTML = (directory.Body[1].Title);
   txtSub3para.innerHTML = (directory.Body[1].Description);
   txtSub4Title.innerHTML = (directory.Body[2].Title);
   txtSub4para.innerHTML = (directory.Body[2].Description);
   txtSub5Title.innerHTML = (directory.Body[3].Title);
}



