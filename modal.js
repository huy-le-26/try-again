class Modal {
    container = document.createElement("div");
    modalContainer = document.createElement("div");
  
    header = document.createElement("div");
    body = document.createElement("div");
    footer = document.createElement("div");
  
    btnCreate = document.createElement("button");
    btnCancel = document.createElement("button");
  
    constructor() {
      this.container.appendChild(this.modalContainer);
  
      this.modalContainer.appendChild(this.header);
      this.modalContainer.appendChild(this.body);
      this.modalContainer.appendChild(this.footer);
  
      this.btnCreate.innerHTML = "Create";
      this.btnCancel.innerHTML = "Cancel";
      this.modalContainer.appendChild(this.btnCancel);
      this.modalContainer.appendChild(this.btnCreate);
    }
  
    setHeader = (title) => {
      this.header.innerHTML = title;
    };
  
    setBody = (component) => {
      this.body.innerHTML = "";
      this.body.appendChild(component);
    };
  
    setOnclickCancel = (listener) => {
      this.btnCancel.onclick = listener;
    };
  
    setOnclickCreate = (listener) => {
      this.btnCreate.onclick = listener;
    };
  }
  
  export { Modal };