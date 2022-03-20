class ConversationItem {
    // hàm hiển thị list cuộc trò chuyện 
    id;
    name;
    users;
  
    container = document.createElement("div");
    // tên cuộc trò chuyện
    txtName = document.createElement("span");
    // số lượng user trong cuộc trò chuyện
    txtNoOfUsers = document.createElement("span");
  
    constructor(id, name, users) {
      this.id = id;
      this.name = name;
      this.users = users;
  
      this.txtName.innerHTML = name;
    //   số lượng user
      this.txtNoOfUsers.innerHTML = `( ${users.length} )`;
  
      this.container.appendChild(this.txtName);
      this.container.appendChild(this.txtNoOfUsers);
    }
  
//  bắt sự kiện khi ấn vào mỗi conversation Item
   setOnClick = (listener) => {
    this.container.onclick = () => {
      listener(this.id, this.name, this.users);
    };
  };

    // hàm hightlight khi ấn vào mỗi thằng conversation
    setActiveHighlight = (isHighlight) => {
      if (isHighlight) {
        this.container.style.background = "#ccc";
        this.container.style.color = "#fff";
      } else {
        this.container.style.background = "#fff";
        this.container.style.color = "#000";
      }
    };
  }
  
  export { ConversationItem };