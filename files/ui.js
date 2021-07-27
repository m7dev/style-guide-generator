
//SHOW CONTENT BUTTONS
function contentDisplay(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

//KEY EVENTS
window.addEventListener("keyup", (e) => {
    var key = e.which || e.keyCode;
    if (key === 13) {
        generateStyleGuide();
    }
    if (key === 35) {
        generateSnapShot();
    }
});