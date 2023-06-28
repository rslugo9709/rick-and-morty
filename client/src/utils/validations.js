export function validate(user) {
    let errors = {};
  
    if (!user.username) {
      errors.username = "Enter tour email";
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.username)) {
      errors.username = "Invalid email";
    }
    if (user.password.length < 6 || user.password.length > 10) {
      errors.password = "Password must be 6 to 10 characters";
    }
    if (!user.password) {
      errors.password = "Enter a password";
    }
  
    return errors;
  }
  