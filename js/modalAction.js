document.getElementsByClassName("portfolio-file")[0].querySelectorAll("a").item(0).addEventListener('click', () => {
    document.getElementsByClassName("pf-contents")[0].style.display = "block";
});

document.getElementsByClassName("pf-contents")[0].querySelectorAll("p").item(0).addEventListener('click', () => {
    document.getElementsByClassName("pf-contents")[0].style.display = "none";
})