function nowgg() {
    let nowggIFrame = document.querySelector(".active > iframe");
    nowggIFrame.onload = clickIt;
    function clickIt() {nowggIFrame.contentDocument.getElementById("ng-getting-ready-btn").click();setTimeout(alert("You may need to scroll down"),1500)}
}