function createuser(username){
    this.username = username
}

function user(username,userid,userpass){
    createuser.call(this,username)
    this.userid = userid;
    this.userpass = userpass;
}

const name = new user('artorius','GOAT','abysswalker')
console.log(name);
