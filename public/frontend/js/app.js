// SIDEBAR LIST DROPDOWN
var listLink = document.querySelectorAll(".sidebar--list ul li.has--child > a");
for (var i = 0; i < listLink.length; i++) {
  var listEle = document.createElement("span");
  var listEleClass = (listEle.className = "child--arrow");
  listLink[i].appendChild(listEle, listLink[i]);
}
$(".sidebar--list ul li.has--child").on("click", function () {
  $(this).find("ul.inner--list").slideToggle();
  $(this).toggleClass("active");
  $(this).siblings().removeClass("active");
  $(this).siblings().find("ul.inner--list").slideUp();
});
// SIDEBAR LIST DROPDOWN
// SIDEBAR TOGGLE
var sidebarToggle = document.querySelectorAll(".sidebarToggler"),
  sidebarMain = document.querySelector(".dashboard--sidebar");
for (var j = 0; j < sidebarToggle.length; j++) {
  sidebarToggle[j].onclick = function () {
    sidebarMain.classList.toggle("collapse");
  };
}


// SIDEBAR TOGGLE
