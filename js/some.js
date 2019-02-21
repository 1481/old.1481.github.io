var loadingMsg = document.createElement("div");
loadingMsg.style.display = "none";
loadingMsg.style.position = "fixed";
loadingMsg.style.top = "0.1rem";
loadingMsg.style.left = "0.1rem";
loadingMsg.innerHTML = "Loading...";
document.body.appendChild(loadingMsg);

function goPage(url) {
    loadingMsg.style.display = "";
    localStorage.pPage = location.href;
    location.href = url;
}
function goBack() {
    var temppPage = localStorage.pPage;
    localStorage.pPage = "";
    location.href = temppPage;
}
