import "./style.css";
import img from "./img1/img.png";
export let registerPage = /*html*/ `
<div class="form_dangnha">
<img class="DKlogo" src="${img}" alt="">
<div class="DKbig_font">Create new Account</div>
<div class="err" id="server-suc-message"></div>
<div class="err" id="server-err-message"></div>
<div class="DKbox" >
  <form class="DKbox_email_password" id="registerPage1">
    <div class="DKchu">First Name</div>
    <input name="firstname" class="DKbox_email" placeholder="Please enter your first name">
    <div class="color-err" id="err-firstName"></div>
    <div class="">Last Name</div>
    <input name= "lastName"class="box_password DKbox_email" placeholder="Please enter your last name" type="text">
    <div class="color-err" id="err-lastName"></div>
    <div class="">Email address</div>
    <input  name= "emailDK"type="email" class="DKbox_email" placeholder="Please enter your email">
    <div class="color-err" id="err-EmaillDK"></div>
    <div class="">Password</div>
    <input name ="passwordDK"class="box_password DKbox_email" placeholder="Please enter your password" type="password">
    <div class="color-err" id="err-password"></div>
    <div class="">Confirm Password</div>
    <input name ="confirmpasswordDK"class="box_password DKbox_email" placeholder="Please enter your password" type="password">
    <div class="color-err" id="err-confirm-password"></div>
    <button class="box_password DKbox_email color " >Register</button>
   
  </form>
 
</div>
<div class="DKbox">
  <a href="http://127.0.0.1:5501/index.html" class="DKbox_email_password hieght">
    Alrealy have an account? Login here.
  </a>
 
</div>`;
