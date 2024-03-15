const hotpinkColor = document.querySelector(".Mini-cake-Red-velvet");
const whiteColor = document.querySelector(".Mini-cake-cookie-Stawberry");
const FuhcsiaColor = document.querySelector(".MacarronS");

const cartBtn = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];
const imageCard = document.querySelector(".img-container");
const feedbackBtn = document.querySelector(".feedback");
const buttonText= document.querySelector(".button-text");
//eventos en los botones de colores
    hotpinkColor.addEventListener("click", function(){
    cartBtn.style.backgroundColor="hotpink";
    buttonText.style.backgroundColor="pink";
    itemTag.style.backgroundColor="hotpink";
    itemTag.style.color="pink";
    imageCard.style.backgroundImage='url(../imagenes/img1.jpg)'
});
whiteColor.addEventListener("click", function(){
    cartBtn.style.backgroundColor="white";
    buttonText.style.backgroundColor="sky blue";
    itemTag.style.backgroundColor="white";
    itemTag.style.color="sky blue";
    imageCard.style.backgroundImage='url(../imagenes/img2.jpg)'
});
FuhcsiaColor.addEventListener("click", function(){
    cartBtn.style.backgroundColor="purple";
    buttonText.style.backgroundColor="purple";
    itemTag.style.backgroundColor="purple";
    itemTag.style.color="white";
    imageCard.style.backgroundImage='url(../imagenes/img3.jpg)'
});

//implementar el boton del carrito 
const cart =()=>{
    cartBtn.style.display="none";
    feedbackBtn.style.display="block"
}
cartBtn.addEventListener("click",cart);

const feedbackFun=()=>{
    feedbackBtn.style.display="block"
    cartBtn.style.display="none";                                                                                                              
}
feedbackBtn.addEventListener("click", feedbackFun);
