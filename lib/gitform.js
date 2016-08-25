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
