import { loginPage } from "../pages/loginPage/loginPage";
import { chatPage } from "../pages/chatPage/chatPage";
import { resetPass } from "../pages/resetPassWorld/resetPass";
import { registerPage } from "../pages/registerPage/registerPage";
import { validateLoginInfo } from "../controller/index";
import { validateresetInfo } from "../controller/index";
import { validateRegisterInfo } from "../controller/index";
import { Signin } from "../model";

export let setActiveScreen = (screenName) => {
  let app = document.getElementById("app");
  switch (screenName) {
    case "loginPage":
      if (app) {
        app.innerHTML = loginPage;
      }
      const loginForm = document.getElementById("login-form");
      // if (loginForm) {
      //   console.log(loginForm);
      loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;
        validateLoginInfo(email, password);
        setActiveScreen("chatPage");
        Signin(email, password);
      });

      //     // console.log(email);
      //     // console.log(password);

      //     // "phần kiểm tra đăng nhập"

      //     let errEmail = document.getElementById("errLogin");
      //     let errPassword = document.getElementById("errLogin1");
      //     console.log(errPassword);
      //     console.log(errEmail);
      //     let isEmailAddress = (val) => {
      //       return (
      //         /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) ||
      //         /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val)
      //       );
      //     };
      //     let check = isEmailAddress(`${email}`);
      //     console.log(check);
      //     if (email === "") {
      //       errEmail.innerText = "Email không được bỏ trống";
      //       errEmail.style.display = "block";
      //     } else if (check === true) {
      //       errEmail.style.display = "none";
      //       if (password === "") {
      //         errPassword.innerText = "Password không được bỏ trống";
      //         errPassword.style.display = "block";
      //       } else if (password === "123123123") {
      //         // alert("dang nhap thanh cong");
      //         errPassword.style.display = "none";
      //       } else {
      //         errPassword.innerText = "Password Error";
      //         errPassword.style.display = "block";
      //       }
      //     } else {
      //       errEmail.innerText = "Email Error";
      //       errEmail.style.display = "block";
      //     }
      //     // kết thúc kiểm tra
      //   });
      // }

      break;
    case "chatPage":
      if (app) {
        app.innerHTML = chatPage;
      }

      break;
    case "resetPass":
      if (app) {
        app.innerHTML = resetPass;
      }
      const resetPassWorld = document.getElementById("reset-password");

      if (resetPassWorld) {
        //   // console.log(resetPassWorld);

        resetPassWorld.addEventListener("submit", (event) => {
          event.preventDefault();
          const resetEmail = resetPassWorld.resetEmail.value;
          validateresetInfo(resetEmail);
          //     console.log(resetEmail);
          //     let errResetEmail = document.getElementById("err-resetEmail");
          //     console.log(errResetEmail);
          //     if (resetEmail === "") {
          //       errResetEmail.innerHTML = "Email không được bỏ trống";
          //       errResetEmail.style.display = "block";
          //     } else {
          //       errResetEmail.style.display = "none";
          //       if (resetEmail !== "thanhphammk@gmail.com") {
          //         errResetEmail.innerHTML = "Email không hợp lệ ";
          //         errResetEmail.style.display = "block";
          //       } else {
          //         alert("thành công");
          //       }
          //     }
        });
      }

      break;

    case "registerPage":
      if (app) {
        app.innerHTML = registerPage;
      }
      // kiemtradangki
      const registerPage1 = document.getElementById("registerPage1");
      if (registerPage1) {
        //   console.log(registerPage1);
        registerPage1.addEventListener("submit", (event) => {
          event.preventDefault();
          const firstname = registerPage1.firstname.value;
          const lastName = registerPage1.lastName.value;
          const emailDK = registerPage1.emailDK.value;
          const passwordDK = registerPage1.passwordDK.value;
          const confirmpasswordDK = registerPage1.confirmpasswordDK.value;
          validateRegisterInfo(
            firstname,
            lastName,
            emailDK,
            passwordDK,
            confirmpasswordDK
          );
        });
      }
      break;

    default:
      break;
  }
};

//  /////////////
// let errEmail = document.getElementById("errLogin");
// let errPassword = document.getElementById("errLogin1");
// console.log(errPassword);
// console.log(errEmail);
// if (email === "") {
//   errEmail.innerText = "Email không được bỏ trống";
//   errEmail.style.display = "block";
// } else if (password === "") {
//   errPassword.innerText = "Password không được bỏ trống";
//   errPassword.style.display = "block";
// }
//////////////
/* // Controller làm nhiệm vụ validate thông tin
          // Tạo hàm validateLoginInfo nhận vào email và password trong controller
          // Export hàm validateLoginInfo
          // Import hàm validateLoginInfo trong view
          // Trong Screen Login, gọi hàm validateLoginInfo() với email và pass lấy
          // từ form

          // Trong controller, logic của hàm validateLoginInfo sẽ là kiểm tra xem
          // có phải email hợp lệ không, có bỏ trống trường nào không

          // Tạo một hàm setMessage ở view và export sang controller để in ra lỗi
          // từ những trường hợp validate đó
          - làm giống hệt các bước trên với nhưng màn resetpass....
          */

// let validateLoginInfo = (email, passworld) => {

// };
export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
  }
};
