class User {
    constructor(first, last, e){
        this.f= first;
        this.l= last;
        this.email = e;
    }
}

var userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first);//undefined
console.log(userOne.f);//Paul
console.log(userOne.l);//O'Connor
console.log(userOne); //User("Paul", "O'Connor", "poconnor@elevenfifty.org");
