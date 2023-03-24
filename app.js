
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let Name = event.target.name.value;
    let date = event.target.date.value;
    let gender;
    const radios = document.getElementsByName('radioGender');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          // Get value of checked radio button
          const selectedValue = radios[i].value;
          console.log(selectedValue);
          gender = selectedValue;

          break;

        }
      }

    let phonNumber = event.target.number.value;
    let grade = event.target.grade.value;

    const table = document.getElementById("table").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const dateCell = newRow.insertCell(1);
    const genderCell = newRow.insertCell(2);
    const numCell = newRow.insertCell(3);
    const gradeCell = newRow.insertCell(4);


    nameCell.innerHTML = Name;
    dateCell.innerHTML = date;
    genderCell.innerHTML = gender;
    numCell.innerHTML = phonNumber;
    gradeCell.innerHTML = grade;


    document.getElementById("form").reset();

});
