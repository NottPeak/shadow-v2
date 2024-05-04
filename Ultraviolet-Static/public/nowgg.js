function nowgg() {
    let nowggIFrame = document.querySelector(".active > iframe");
    nowggIFrame.onload = clickIt;
    function clickIt() {nowggIFrame.contentDocument.getElementById("ng-getting-ready-btn").click()}
}