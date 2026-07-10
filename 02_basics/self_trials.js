const userInfo = {
    name : "prajakta",
    password : "1234",
    country : "india",
    location : "mumbai"
}

console.log(userInfo.location);


userInfo.greeting = function(){
    console.log("hello user");
}

userInfo.greeting();

userInfo.greeting = function(){
    console.log(`hello ${this.name}`);
}

userInfo.greeting();

