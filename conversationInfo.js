class ConversationInfo {
    name;
  
    container = document.createElement("div");
    txtName = document.createElement("span");
    btnLogout = document.createElement("button");
  
    constructor() {
      this.txtName.innerHTML = "Chọn đi chờ gì ...";
      this.btnLogout.innerHTML = "Logout";
      this.btnLogout.addEventListener("click", this.handleLogout);
  
      this.container.appendChild(this.txtName);
      this.container.appendChild(this.btnLogout);
    }
  
    setName = (name) => {
      this.name = name;
      this.txtName.innerHTML = name;
    };
  
    handleLogout = (e) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          console.log("Sign out successful");
        })
        .catch((error) => {
          // An error happened.
          console.log(error.message);
        });
    };
  }
  
  export { ConversationInfo };