//ES6 JS Classes
class User{
    constructor (username, password){
        this.name = username;
        this.password= password;
        this.type = "Trial User"
    }
    //method 1
    greet(){
        console.log('Welcome back,'+ this.name);
    }
    //method 2
    status() {
        console.log('Current status:'+ this.type);
    }
}

//Insance of the class/new object
var anondude = new User("Anonymous");
anonDude.greet();
anonDude.status();

//Super
class BronzelevelUser extends User{
    //We add the ccinfo property to the user here.
    constructor(username, password, ccinfo){
        this.type = "Bronze User";
        this.ccinfo = ccinfo;
    }
    getInfo(){
        console.log(this.username, this.password, this.type, this.ccinfo);
    }
}

var bronzeGuy = new BronzelevelUser("Bronze Dude", "bronze7589", "42424242424242")
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);
