const txtSub1Title = document.getElementById("Sub1Title");
const txtSub1para = document.getElementById("Sub1para");
const txtSub2Title = document.getElementById("Sub2Title");
const txtSub2para = document.getElementById("Sub2para");
const txtSub3Title = document.getElementById("Sub3Title");
const txtSub3para = document.getElementById("Sub3para");
const txtTableHead = document.getElementById("TableHead")
const txtth1 = document.getElementById("th1")
const txtth2 = document.getElementById("th2")
const txtth3 = document.getElementById("th3")
const txtname1 = document.getElementById("name1")
const txtfunfact1 = document.getElementById("funfact1")
const txtname2 = document.getElementById("name2")
const txtfunfact2 = document.getElementById("funfact2")
const txtname3 = document.getElementById("name3")
const txtfunfact3 = document.getElementById("funfact3")

let directory;

function local() {
   fetch('Introduction to Sri Lankan Wildlife.json')
       .then(res => res.json())
       .then(data => {
         localStorage.setItem('WildlifeData', JSON.stringify(data));
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
   directory = JSON.parse(localStorage.getItem('WildlifeData'));;
   txtSub1Title.innerHTML = (directory.Main.Title);
   txtSub1para.innerHTML = (directory.Main.Description);
   txtSub2Title.innerHTML = (directory.Body[0].Title);
   txtSub2para.innerHTML = (directory.Body[0].Description);
   txtSub3Title.innerHTML = (directory.Body[1].Title);
   txtSub3para.innerHTML = (directory.Body[1].Description);
   txtTableHead.innerHTML = (directory.Table[0].Title);
   txtth1.innerHTML = (directory.Table[1].th1);
   txtth2.innerHTML = (directory.Table[1].th2);
   txtth3.innerHTML = (directory.Table[1].th3);
   txtname1.innerHTML = (directory.Table[2].Name);
   txtfunfact1.innerHTML = (directory.Table[2].FunFact)
   txtname2.innerHTML = (directory.Table[3].Name);
   txtfunfact2.innerHTML = (directory.Table[3].FunFact)
   txtname3.innerHTML = (directory.Table[4].Name);
   txtfunfact3.innerHTML = (directory.Table[4].FunFact)
}   



