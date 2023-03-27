
let arrData = [];
if (localStorage.arrData != null) {
  arrData = JSON.parse(localStorage.arrData);
  render();
}

let Name;
let Bday;
let Gender;
let Major;
let number;
let userImg;

// Event listener for form submission
const form = document.getElementById('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  Name = event.target.name.value;
  Bday = event.target.date.value;
  Gender = event.target.radioGender.value;
  Major = event.target.radioMajor.value;
  number = event.target.number.value;
  userImg=event.target.userimg.value;
  // DataCollected.reset();


  let student = new Students(Name, Bday, Gender, Major, number ,userImg);

  arrData.push(student);
  localStorage.setItem('arrData', JSON.stringify(arrData));
  render();
});


// Constructor function for creating card elements
function Students(Name, Bday, Gender, Major, number,userImg) {
  this.Name = Name;
  this.Bday = Bday;
  this.Gender = Gender;
  this.Major = Major;
  this.number = number;
  this.userImg = userImg;
}

// Render function for displaying card elements
function render() {
  for (let i = 0; i < arrData.length; i++) {

    let sdcard = document.getElementById("student_card");
    let divContainer = document.createElement('div');
    let img0 = document.createElement('img');
    img0.src=`${arrData[i].userImg}`;

    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    li1.textContent = `Name: ${arrData[i].Name}`;
    let li2 = document.createElement("li");
    li2.textContent = `Date of birth: ${arrData[i].Bday}`;
    let li3 = document.createElement("li");
    li3.textContent = `Gender: ${arrData[i].Gender}`;
    let li4 = document.createElement("li");
    li4.textContent = `Major: ${arrData[i].Major}`;
    let li5 = document.createElement("li");
    li5.textContent = `Phone Number: ${arrData[i].number}`;

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);


    divContainer.appendChild(img0);
    divContainer.appendChild(ul);
    sdcard.appendChild(divContainer);

  }
}







