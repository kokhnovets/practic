var User = /** @class */ (function () {
    function User(_name) {
        this.name = _name;
    }
    return User;
}());
var tom = new User('Михаил');
console.log('Привет', tom.name);
