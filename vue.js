
var christmascard = document.querySelector('#christmascard');
var skyboxes = document.querySelector('#skyboxes');
var solarsystem = document.querySelector('#solarsystem');

var iframe = document.querySelector("#iframe");

christmascard.onclick = function () {
    iframe.src = "hannahripley.com/christmascard";
};

skyboxes.onclick = function () {
    iframe.src = "skybox/index.html";
};

solarsystem.onclick = function () {
    iframe.src = "solarsystem/index.html";
};