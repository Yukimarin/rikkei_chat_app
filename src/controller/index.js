// Controller làm nhiệm vụ validate thông tin
// Tạo hàm validateLoginInfo nhận vào email và password trong controller
// Export hàm validateLoginInfo
// Import hàm validateLoginInfo trong view
// Trong Screen Login, gọi hàm validateLoginInfo() với email và pass lấy
// từ form

// Trong controller, logic của hàm validateLoginInfo sẽ là kiểm tra xem
// có phải email hợp lệ không, có bỏ trống trường nào không

// Tạo một hàm setMessage ở view và export sang controller để in ra lỗi
// từ những trường hợp validate đó;
import { renderErrorMessage } from "../view/index";
import { createNewUser, updateProfile1 } from "../model/index";
// import { updateProfile } from "../model/index";
export let validateLoginInfo = (email, password) => {
  // regex, regular expression
  // email regex
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("errLogin", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("errLogin", "Invalid email");
  } else {
    renderErrorMessage("errLogin", "");
  }

  if (!password) {
    renderErrorMessage("errLogin1", "Please enter your password");
  } else {
    renderErrorMessage("errLogin1", "");
  }
};

export let validateresetInfo = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("err-resetEmail", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("err-resetEmail", "Invalid email");
  } else {
    renderErrorMessage("err-resetEmail", "");
  }
};

export let validateRegisterInfo = (
  firstname,
  lastname,
  email,
  password,
  confirm
) => {
  if (!firstname) {
    renderErrorMessage("err-firstName", "Please enter your firstname");
  } else {
    renderErrorMessage("err-firstName", "");
  }
  // -------
  if (!lastname) {
    renderErrorMessage("err-lastName", "Please enter your lastname");
  } else {
    renderErrorMessage("err-lastName", "");
  }
  // -------
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("err-EmaillDK", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("err-EmaillDK", "Invalid email");
  } else {
    renderErrorMessage("err-EmaillDK", "");
  }
  // -------
  if (!password) {
    renderErrorMessage("err-password", "Please enter your password");
  } else {
    renderErrorMessage("err-password", "");
  }
  // -------
  if (!confirm) {
    renderErrorMessage(
      "err-confirm-password",
      "Please enter your confirm password"
    );
  } else if (confirm !== password) {
    renderErrorMessage("err-confirm-password", "Not the same password");
  } else {
    renderErrorMessage("err-confirm-password", "");
  }

  if (
    firstname &&
    lastname &&
    email &&
    password &&
    confirm &&
    confirm === password
  ) {
    createNewUser(firstname, lastname, email, password);
    updateProfile1(firstname, lastname);
  }
};
