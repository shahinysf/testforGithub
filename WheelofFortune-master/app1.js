function on1() {
    document.getElementById("overlay1").style.display = "block";
}
  
function off1() {
    document.getElementById("overlay1").style.display = "none";
}

document.getElementById("instructionsBtn").addEventListener("click", on1)
document.getElementById("overlay1").addEventListener("click", off1)

function on2() {
    document.getElementById("overlay2").style.display = "block";
}
  
function off2() {
    document.getElementById("overlay2").style.display = "none";
}

document.getElementById("creditsBtn").addEventListener("click", on2)
document.getElementById("overlay2").addEventListener("click", off2)