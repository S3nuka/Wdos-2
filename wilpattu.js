const txtSub1Title = document.getElementById("Sub1Title");
const txtSub1para1 = document.getElementById("Sub1para");
const txtSub2Title = document.getElementById("Sub2Title");
const txtSub2para = document.getElementById("Sub2para");
const txtSub3Title = document.getElementById("Sub3Title");
const txtSub3para = document.getElementById("Sub3para");

let directory;

function local() {
   fetch('wilpattu.json')
       .then(res => res.json())
       .then(data => {
         localStorage.setItem('WilpattuData', JSON.stringify(data));
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
   directory = JSON.parse(localStorage.getItem('WilpattuData'));;
   txtSub1Title.innerHTML = (directory.Main.Title);
   txtSub1para1.innerHTML = (directory.Main.Description);
   txtSub2Title.innerHTML = (directory.Body[0].Title);
   txtSub2para.innerHTML = (directory.Body[0].Description)
   txtSub3Title.innerHTML = (directory.Body[1].Title);
   txtSub3para.innerHTML = (directory.Body[1].Description);
}


