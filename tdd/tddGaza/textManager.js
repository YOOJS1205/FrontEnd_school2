class TextManager {
    constructor() {
        this.value = { data: 'Hello World!' };
    }

    getValue() {
        return this.value.data;
    }

    setValue(newValue) {
        this.value = newValue;
    }
}