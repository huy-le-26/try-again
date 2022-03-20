class InputCommon {
    container = document.createElement("div")
    label = document.createElement("label")
    input = document.createElement("input")
    errMessage = document.createElement("div")

    constructor(label, inputType, placeholder, name) {
        this.container.className = "wrapper"

        this.label.innerHTML = label
        this.label.htmlFor = name
        this.input.type = inputType
        this.input.placeholder = placeholder
        this.input.name = name
        this.errMessage.className = "errMessage"

        this.container.appendChild(this.label)
        this.container.appendChild(this.input)
        this.container.appendChild(this.errMessage)
    }

    getValue = () => {
        return this.input.value;
    }

    setErrorMessage = (errMessage) => {
        this.errMessage.innerHTML = errMessage
    }
}

export { InputCommon }