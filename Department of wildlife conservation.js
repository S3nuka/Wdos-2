const txtSub1Title = document.getElementById("Sub1Title");
const txtSub1para = document.getElementById("Sub1para");
const txtSub2Title = document.getElementById("Sub2Title");


let directory;

function local() {
   fetch('Department of wildlife conservation.json')
       .then(res => res.json())
       .then(data => {
         localStorage.setItem('ConservationData', JSON.stringify(data));
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
   directory = JSON.parse(localStorage.getItem('ConservationData'));;
   txtSub1Title.innerHTML = (directory.Main.Title);
   txtSub1para.innerHTML = (directory.Main.Description);
   txtSub2Title.innerHTML = (directory.Body.Title);

}   



