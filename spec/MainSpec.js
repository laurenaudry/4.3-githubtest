// Example spec
var gitform = require("../lib/gitform.js");

describe("gitform", function(){
  var testing = {};

  it("should get my profile picture from responseJSON", function(){
    testing = {
      avatar_url: "https://avatars.githubusercontent.com/u/20157258?v=3"
    };
    expect(gitHub.getAvatar(testing)).toEqual("hhttps://avatars.githubusercontent.com/u/20157258?v=3");
  });

  it("should get my login name from responseJSON", function(){
    testing = {
      login: "laurenaudry"
    }
    expect(gitHub.getLogin(testing)).toEqual("laurenaudry");
  });

  it("should show my account as a 'User'", function() {
     stubJSON = {
       type: "User"

  it("should get my location from responseJSON", function() {
    testing = {
      location: "San Antonio, Tx"
    };
    expect(gitHub.getLocation(testing)).toEqual("San Antonio, Tx");
  });

  it("should get my email from responseJSON", function() {
    testing = {
      email: "laurenaudry1995@gmail.com"
    };
    expect(gitHub.getEmail(testing)).toEqual("laurenaudry1995@gmail.com");
  });
