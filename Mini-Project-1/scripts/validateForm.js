function setError(id, err) {
  // sets error inside id tag
  element = document.getElementById(id)
  element.getElementsByClassName('form-error')[0].innerHTML = err
}

function validateForm() {
  var returnval = true
  // validates form content by certain constraints and returns returnval
  var name = document.forms['contact-form']['fname'].value
  var letters = /^[A-Za-z]+$/
  if (!name.match(letters)) {
    setError('name', '*Please enter your name properly')
    returnval = false
  }

  var email = document.forms['contact-form']['email-id'].value
  var validemailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  if (!email.match(validemailRegex)) {
    setError('email', '*Please enter valid email id')
    returnval = false
  }
  var mobnum = document.forms['contact-form']['mob-num'].value
  var mnumRegex = /^\d{10}$/
  if (!mobnum.match(mnumRegex)) {
    setError('mob-num-field', '*Please enter valid mobile number')
    returnval = false
  }

  return returnval
}
