class inputCheck {
    container = document.createElement('div');
    input = document.createElement('input');

    constructor(inputType, name, inputValue) {
        this.input.type = inputType;
        this.input.name = name;
        this.input.value = inputValue;

        this.container.appendChild(this.input);
    }
}

export {inputCheck}
