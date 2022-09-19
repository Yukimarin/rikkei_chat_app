import "./stylesendmess.css";
export let chatPage = /*html */ `
<div class="box_chat">
<div>
  <div class="topic">Rikkei Chat</div>
  <div id = "user">User</div>
</div>
<div class="box_ib">
  <div class="New_conversion">
    <button class="New_conversion-text">+ New conversion</button>
    <div class="New_conversion-notext"></div>
  </div>
  <div class="First_conversion">
    <div class="First_conversion-text">First conversion</div>
    <div class="anh-thanh"></div>
    <div class="First_conversion-text--send">
      <input
        type="text"
        class="write_text"
        placeholder="type a messenger"
      />
      <button clas="btn_send">Send</button>
    </div>
  </div>
  <div class="New_conversion"></div>
</div>
</div>
`;
