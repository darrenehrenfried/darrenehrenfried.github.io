

//------------------------------------------------------------------------------

function displayLabelOn1() {
    var badgeLabel = document.getElementById("badge-label-1");
    badgeLabel.style.display = "block";
    // console.log("hovery");
}

function displayLabelOff1() {
    var badgeLabel = document.getElementById("badge-label-1");
    badgeLabel.style.display = "none";
    // console.log("hover off");
}

function displayLabelOn2() {
    var badgeLabel = document.getElementById("badge-label-2");
    badgeLabel.style.display = "block";
    // console.log("hovery");
}

function displayLabelOff2() {
    var badgeLabel = document.getElementById("badge-label-2");
    badgeLabel.style.display = "none";
    // console.log("hover off");
}

function displayLabelOn3() {
    var badgeLabel = document.getElementById("badge-label-3");
    badgeLabel.style.display = "block";
    // console.log("hovery");
}

function displayLabelOff3() {
    var badgeLabel = document.getElementById("badge-label-3");
    badgeLabel.style.display = "none";
    // console.log("hover off");
}


document.getElementById("badge-link-1").addEventListener("mouseover", displayLabelOn1);
document.getElementById("badge-link-1").addEventListener("mouseout", displayLabelOff1);
document.getElementById("badge-link-2").addEventListener("mouseover", displayLabelOn2);
document.getElementById("badge-link-2").addEventListener("mouseout", displayLabelOff2);
document.getElementById("badge-link-3").addEventListener("mouseover", displayLabelOn3);
document.getElementById("badge-link-3").addEventListener("mouseout", displayLabelOff3);

//------------------------------------------------------------------------------
