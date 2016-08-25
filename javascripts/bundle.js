(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var gitform = this;

gitform.getData = function(){
  gitform.request = new XMLHttpRequest();

  gitform.request.addEventListener("load", function(e) {
    var responseJSON = JSON.parse(e.target.response);
    var testElement = document.querySelector("[data-js='main']");

    testElement.innerHTML = `
    <img class="avatar_url" src="${gitform.getAvatar(responseJSON)}" alt="Lauren's profile picture" />
    <h2>
      ${gitform.getLogin(responseJSON)}
    </h2>
    <p>
      (${gitform.getUserType(responseJSON)})
    </p>
    <h4>
      ${gitform.getLocation(responseJSON)}
    </h4>
    <h4>
      <a href="mailto:${gitform.getEmail(responseJSON)}">
      ${gitform.getEmail(responseJSON)}</a>
    </h4>
    <h4>
      ${gitform.getHireable(responseJSON)}
    </h4>

    `;
  });

  gitform.request.open("GET", "https://api.github.com/users/laurenaudry");
  gitform.request.send(null);
}

},{}],2:[function(require,module,exports){
var gitform = require("./gitform.js");

document.addEventListener("DOMContentLoaded", function(){
  gitform.grabData();
});

},{"./gitform.js":1}]},{},[2]);
