function Parent() {
    this.name = '준상';
}

Parent.prototype.rename = function(name) {
    this.name = name;
}
Parent.prototype.sayName = function() {
    console.log(this.name);
}

// Child가 Parent의 this를 사용할 수 있게 됨.
function Child() {
    // this를 주입해서 사용할 수 있게 해준다.
    Parent.call(this);
}

// Child가 Parnet의 Prototype을 상속
Child.prototype = Object.create(Parent.prototype);

Child.prototype.canWalk = function() {
    console.log('Now I can walk!!');
}

const child1 = new Child('jun');