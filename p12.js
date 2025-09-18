function validatePIN(pin) {
  let valid = false;
  if (/^[0-9]{4}$/.test(pin) || /^[0-9]{6}$/.test(pin)) {
    valid = true;
  }
  return valid;
}
const pin = "1234";
console.log(validatePIN(pin));
