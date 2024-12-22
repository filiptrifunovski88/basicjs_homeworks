function studentsInfo(event) {
  event.preventDefault(); // ova go najdov na internet ama ne go svajgkam bas kako rabotit ako ne e problem vo feedback-ot da mi go objasnite

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;

  const firstNameOnHtml = document.getElementById("paragraph-1");
  firstNameOnHtml.textContent += firstName;

  const lastNameOnHtml = document.getElementById("paragraph-2");
  lastNameOnHtml.textContent += lastName;

  const ageOnHtml = document.getElementById("paragraph-3");
  ageOnHtml.textContent += age;
}
