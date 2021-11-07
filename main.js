let noOfCharac = 150;
let contents = document.querySelectorAll(".content");
contents.forEach(content => {
    if(content.textContent.length < noOfCharac) {
        content.nextElementSibling.style.display = "none";   
    } else {
        let displayText = content.textContent.slice(0,noOfCharac);
        let textMore = content.textContent.slice(noOfCharac);
        content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${textMore}</span>`;
    }
});

function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Tampilkan Lebih Banyak" ? btn.textContent = "Tampilkan Lebih Sedikit" : btn.textContent = "Tampilkan Lebih Banyak"
}
