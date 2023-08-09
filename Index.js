const menuIcon = document.getElementById("full-menu")

function showMenu()
{
    menuIcon.classList.remove("nav-bar-hidden")
    menuIcon.classList.add("show-nav-bar")
}

function hideMenu()
{
    menuIcon.classList.add("nav-bar-hidden")
    menuIcon.classList.remove("show-nav-bar")
}