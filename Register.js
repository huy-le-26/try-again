import { InputCommon } from "./inputCommon.js";
import { setScreen } from "./index.js";
import { Login } from "./login.js";

class Register {
  container = document.createElement("div");
  title = document.createElement("h3");
  tab_group = document.createElement("div");
  form = document.createElement("form");
  inputEmail = new InputCommon("", "email", "Enter your email", "inputEmail");
  inputPassword = new InputCommon(
    "",
    "password",
    "Enter your password",
    "inputPassword"
  );
  inputConfirmPassword = new InputCommon(
    "",
    "password",
    "Enter your confirm password",
    "inputConfirmPassword"
  );

  BtnContainer = document.createElement("div");
  btnLogin = document.createElement("button");
  btnRegister = document.createElement("button");

  constructor() {
    this.title.innerHTML = "Register";
    this.form.className = "form";
    this.container.className = "container";
    this.btnLogin.classList.add ('button' , );
    this.btnRegister.className = "button";
 

    this.container.appendChild(this.form);

    this.form.appendChild(this.title);
    this.form.appendChild(this.inputEmail.container);
    this.form.appendChild(this.inputPassword.container);
    this.form.appendChild(this.inputConfirmPassword.container);
    
    this.btnLogin.disabled = false;

    this.btnLogin.innerHTML = "Back to login";
    this.btnRegister.innerHTML = "Register";
    this.btnLogin.addEventListener("click", (e) => {
      e.preventDefault();
      const loginScreen = new Login();
      setScreen(loginScreen.container);
    });
    this.btnRegister.addEventListener("click", (e) => {
      e.preventDefault();

      const email = this.inputEmail.getValue();
      const password = this.inputPassword.getValue();
      const ConFrimPassword = this.inputConfirmPassword.getValue();
      var mailFormat =   /^\w+@[a-zA-Z]{3,}\.com$/i;

      if (!email) {
        this.inputEmail.setErrorMessage = "vui lòng không để trống";
      } else if (!email.match(mailFormat)) {
        this.inputEmail.setErrorMessage = "sai định dạng mail rồi";
      } else {
        this.inputEmail.setErrorMessage("");
      }

      if (!password) {
        this.inputPassword.setErrorMessage("vui lòng không để trống");
      } else if (password.length < 6) {
     
        this.inputPassword.setErrorMessage(
          "pass không đúng theo yêu cầu , vui lòng nhập lại"
        );
      
      } else {
        this.inputPassword.setErrorMessage("");
      }


      if (password !== ConFrimPassword ) {
       this.inputConfirmPassword.setErrorMessage("xem lại! , mật khẩu không khớp");
       
      }

      
      if (password !== ConFrimPassword ||  !email.match(mailFormat) ) {
       alert('không đủ điều kiện để tạo 1 tài khoản mới')
      
    
       }else {
           
           // tạo phần đăng nhập email và pass của fisebase
           firebase
             .auth()
             .createUserWithEmailAndPassword(email, password)
             .then((userCredential) => {
               // Signed in
               var user = userCredential.user;
               console.log(`user ${email} is created `);
             })
             .catch((error) => {
               var errorCode = error.code;
               var errorMessage = error.message;
               console.log(errorMessage);
             });
       }
    });
    this.tab_group.appendChild(this.btnLogin);
    this.tab_group.appendChild(this.btnRegister);
    this.form.appendChild(this.tab_group);
  }
}

export { Register };
