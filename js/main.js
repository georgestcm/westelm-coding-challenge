var largePhotoViewer = document.getElementById("viewer");
var itemText = document.getElementById("item-text");
var itemTextTwo = document.getElementById("item-text-Two");
var smallImgWrapper = document.getElementsByClassName("item-list")[0];
var collapseAble = document.querySelectorAll("div.text")[0];
var collapseAbleTwo = document.querySelectorAll("div.text2")[0];
var collapseAbleLinks = document.getElementsByClassName("collape-link")[0];
var collapseAbleLinksTwo = document.getElementsByClassName("collape-link-two")[0];
var collapeOrNot = document.getElementById("collapeOrNot");
var addtoCart = document.getElementById("submit");
var modal = document.getElementById("modal");
var closeButton = document.getElementById("close-button");
var itemColor = document.getElementById("item-color");
var cartImg = document.getElementById("cart-img");
var largeImgs = ['images/product-large-a.jpg','images/product-large-b.jpg','images/product-large-c.jpg','images/product-large-d.jpg']
var productText = ['French Blue','Italian Strippes','Green Strippes','Light Pink', ' '];
smallImgWrapper.addEventListener("click",function(e){
  if(e.target = "IMG"){
    smallImgWrapper.childNodes.forEach(function(el){
        el.classList.remove("addBorder");
    })

    itemText.innerHTML = " ";
    itemTextTwo.innerHTML = " ";
    var el = e.target;
    switch(el.classList.contains("img-one") || el.classList.contains("img-two") || el.classList.contains("img-three") || el.classList.contains("img-four")){
      case el.classList.contains("img-one") :
      largePhotoViewer.setAttribute("src",largeImgs[0]);
      itemText.innerHTML +=  productText[0];
      itemTextTwo.innerHTML += productText[0];
       el.classList.add('addBorder');
       smallImgWrapper.classList.remove("addBorder");
      break;
      case el.classList.contains("img-two"):
       largePhotoViewer.setAttribute("src",largeImgs[1]);
       itemText.innerHTML +=  productText[1];
       itemTextTwo.innerHTML += productText[1];
       el.classList.add('addBorder');
       smallImgWrapper.classList.remove("addBorder");
      break;
      case el.classList.contains("img-three"):
       largePhotoViewer.setAttribute("src",largeImgs[2]);
       itemText.innerHTML +=  productText[2];
       itemTextTwo.innerHTML += productText[2];
       el.classList.add('addBorder');
       smallImgWrapper.classList.remove("addBorder");
      break;
      case el.classList.contains("img-four"):
       largePhotoViewer.setAttribute("src",largeImgs[3]);
       itemText.innerHTML +=  productText[3];
       itemTextTwo.innerHTML += productText[3];
       el.classList.add('addBorder');
       smallImgWrapper.classList.remove("addBorder");
      break;
      default:
      largePhotoViewer.setAttribute("src",largeImgs[0]);
      itemText.innerHTML +=  productText[0];
      itemTextTwo.innerHTML += productText[0];
      smallImgWrapper.classList.remove("addBorder");
    }
  }
})

collapseAbleLinks.addEventListener("click",function(e){
  e.preventDefault();
  if(this.childNodes[0].getAttribute("src")=== "images/arrow-expanded.png"){
    this.childNodes[0].setAttribute("src","images/arrow-collapsed.png");
    collapeOrNot.textContent = " "+"COLLAPSED";
    collapseAble.style.display = "none";
  } else {
    this.childNodes[0].setAttribute("src","images/arrow-expanded.png");
    collapeOrNot.textContent = " "+"EXPANDED";
    collapseAble.style.display = "block";

  }
})

collapseAbleTwo.style.display = "none";
collapseAbleLinksTwo.addEventListener("click",function(e){
  e.preventDefault();

  if(this.childNodes[0].getAttribute("src")=== "images/arrow-collapsed.png"){
    this.childNodes[0].setAttribute("src","images/arrow-expanded.png");
    collapeOrNotTwo.textContent = " "+"EXPANDED";
    collapseAbleTwo.style.display = "block";
  } else {
    this.childNodes[0].setAttribute("src","images/arrow-collapsed.png");
    collapeOrNotTwo.textContent = " "+"COLLAPSED";
    collapseAbleTwo.style.display = "none";
  }

})


addtoCart.addEventListener("click",function(e){
  e.preventDefault();
modal.style.display = "block";
itemColor.innerHTML += itemText.textContent;
cartImg.setAttribute("src",largePhotoViewer.getAttribute("src"));
})

closeButton.addEventListener("click",function(){
  modal.style.display = "none";
  itemColor.innerHTML = " ";
  cartImg.setAttribute("src"," ");
})
