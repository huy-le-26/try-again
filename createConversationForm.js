import { InputCommon } from ".inputCommon.js";
import { Modal } from "./modal.js";

class CreateConversationForm {
  container = document.createElement("div");

  modal = new Modal();

  form = document.createElement("form");
  // First: current user
  conversationNameInput = new InputCommon(
    "Conversation Name",
    "text",
    "Enter your conversation name",
    "conversationName"
  );

  constructor() {
    this.container.appendChild(this.modal.container);
    this.container.style.visibility = "hidden";

    this.modal.setHeader("Create conversation");
    this.modal.setBody(this.form);
    this.modal.setOnclickCancel(() => {
      this.setVisible(false);
    });
    this.modal.setOnclickCreate(this.handleCreateConversation);

    this.form.appendChild(this.conversationNameInput.container);
  }

  handleCreateConversation = () => {
    const name = this.conversationNameInput.getValue();
    db.collection("conversations").add({
      name: name,
      users: [firebase.auth().currentUser.email],
    });
  };

  setVisible = (visible) => {
    if (visible) this.container.style.visibility = "visible";
    else this.container.style.visibility = "hidden";
  };
}

export { CreateConversationForm };