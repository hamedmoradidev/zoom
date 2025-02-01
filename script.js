const img=document.getElementById("img")
const album=document.querySelectorAll(".album")
img.addEventListener("mousemove",(e)=>{
    let x=e.offsetX
    let y=e.offsetY
    img.style.transformOrigin=`${x}px ${y}px`
    img.style.transform=`scale(2)`
})
img.addEventListener("mouseleave",(e)=>{
    // img.style.transformOrigin=`center`
    img.style.transform=`scale(1)`
})
album.forEach(item => {
    item.addEventListener("click",(e)=>{
        img.setAttribute("src",e.target.getAttribute("src"))
    })
});