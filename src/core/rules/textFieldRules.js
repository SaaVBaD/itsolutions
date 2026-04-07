const isEmail = (email) => {
  if (!email) return required(email);
  if (/.+@.+\..+/.test(email)) return true
  return "Email must be valid!"
}

const required = (text) => {
  if (text) return true
  return "This field is required!"
}

export { required, isEmail }