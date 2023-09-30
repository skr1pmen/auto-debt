window.onscroll = function showHeader(){
    let header = document.querySelector('header');
    let firstBlock = document.querySelector(".heroBlock");

    if(window.pageYOffset > 75){
        header.classList.add("headerFixed");
        firstBlock.classList.add("heroBlockMT");
    } else {
        header.classList.remove("headerFixed");
        firstBlock.classList.remove("heroBlockMT");
    }
}