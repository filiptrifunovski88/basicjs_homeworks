document
  .getElementById("myForm")
  .addEventListener(
    "submit",
    function (event, firstName, lastName, email, password) {
      event.preventDefault();
      firstName = document.getElementById("firstName").value;
      lastName = document.getElementById("lastName").value;
      email = document.getElementById("email").value;
      password = document.getElementById("password").value;

      const allParagraphs = document.querySelectorAll("p");

      const firstParagraph = allParagraphs[0];
      firstParagraph.innerHTML = firstName;

      const secondParagraph = allParagraphs[1];
      secondParagraph.innerHTML = lastName;

      const tihrdParagraph = allParagraphs[2];
      tihrdParagraph.innerHTML = email;

      const fourthParagraph = allParagraphs[3];
      fourthParagraph.innerHTML = password;
    }
  );
