import "./style.css";
// import img from "./img1/img.png"
export let loginPage = /*html*/ `
<div class="form_dangnhap">
<img class="logo" src="https://tuyendung.rikkeisoft.com/assets/front/images/logoRikkeisoft.png" alt="">
<div class="big_font">Sign in to Rikkei Chat</div>
<div class="err" id="server-loginsuc-message"></div>
<div class="err" id="server-loginerr-message"></div>
<form class="box" id = "login-form">
  <div class="box_email_password">
    <div class="">Email address</div>
    <input name="email" type="email" class="box_email" placeholder="Please enter your email">
    <div id="errLogin"></div>
    <div class="">Password</div>
    

    <input class="box_password box_email" type="password" placeholder="Please enter your password" name="password">
    <div id="errLogin1"></div>
  </div>
  <button class="btn_login box_email">Login</button>
  
</form>
<button class="box_creat_account">New to Rikkei Chat?Create an account</button>

<div class="forget_passwold">
  <a href="http://127.0.0.1:5501/index.html">Forget your passwold? Click here</a>
</div>
</div>`;
