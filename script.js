const text = "Full Stack Developer";
let i = 0;

(function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text[i++];
    setTimeout(type, 80);
  }
})();