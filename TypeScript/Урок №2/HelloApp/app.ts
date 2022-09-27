class User {
    name: string;
    constructor(_name: string) {
        this.name = _name;
    }
}
const tom: User = new User('Михаил');
console.log('Привет', tom.name);