// створив клас як на занятті та ускладнив його, в результаті заплутався в об'єктах, мало голову не зламав. Гуглив рішення
console.log('Задаю клас з методами get і set');
class MyPasswords {
    #password;
    #securityLevel;
    constructor(code, securityLevel) {
        this.#password = code;
        this.#securityLevel = securityLevel;
    }

    get code() {
        return {
            password: this.#password,
            securityLevel: this.#securityLevel
        };
    }

    set code(code) {
        (this.#password = code.password), (this.#securityLevel = code.securityLevel);
    }
}

console.log('Створюю клас і виводжу змінні');
const Password1 = new MyPasswords('123', 'wick');
console.log(Password1.code.password, Password1.code.securityLevel);
console.log('*****************');

console.log('Присвоюю нові значення змінним та виводжу їх');
Password1.code = { password: '456', securityLevel: 'average' };
console.log(Password1.code.password, Password1.code.securityLevel);
console.log('*****************');
