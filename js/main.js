const inputParent = Array.from(document.querySelectorAll(".input-container"));
const submitBtn = document.querySelector(".submit");
const check = document.querySelector("#term");

submitBtn.addEventListener("click", handleForm);

function handleForm(e) {
  e.preventDefault();
  inputParent.forEach((item) => {
    validation(item);
  });
  if (!check.checked) {
    check.nextElementSibling.style.border = `2px dotted #ff7a7a`;
  } else {
    check.nextElementSibling.style.border = `none`;
  }
}

const validation = (item) => {
  const theInputField = item.firstElementChild.firstElementChild;
  const theSpan = item.lastElementChild;
  const theIcon = theInputField.nextElementSibling;
  const fieldName = theInputField.getAttribute("data-field");

  if (theInputField.value === "") {
    theInputField.style.border = `1px solid #ff7a7a`;
    theIcon.style.visibility = "visible";
    theSpan.textContent = `${fieldName} cannot be empty`;
  }
  // email Validation
  else if (theInputField.id == "email" && !ValidateEmail(theInputField.value)) {
    theInputField.style.border = `1px solid #ff7a7a`;
    theIcon.style.visibility = "visible";
    theSpan.textContent = `Looks like this is not an email`;
  } else {
    theSpan.textContent = ``;
    theIcon.style.visibility = "hidden";
    theInputField.style.border = `1px solid #b9b6d3`;
  }
};

/**
 *  Email Validation Source
 * https://www.w3resource.com/javascript/form/email-validation.php
 *
 */
function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}
