var largePhotoViewer = document.getElementById("viewer");
var directoryText = document.getElementById("dir-text");
var smallImgWrapper = document.getElementsByClassName("item-list")[0];
var largeImgs = ['images/product-large-a.jpg','images/product-large-b.jpg','images/product-large-c.jpg','images/product-large-d.jpg']
var productText = ['French Blue','Italian Strippes','Green Strippes','Light Pink', ' '];
smallImgWrapper.addEventListener("click",function(e){
  if(e.target = "IMG"){
    var el = e.target;
    switch(el.classList.contains("img-one")||el.classList.contains("img-two")||el.classList.contains("img-three")||el.classList.contains("img-four")){
      case el.classList.contains("img-one") :
      largePhotoViewer.setAttribute("src",largeImgs[0]);
      directoryText.innerHTML +=  productText[0];
      break;
      case el.classList.contains("img-two"):
       largePhotoViewer.setAttribute("src",largeImgs[1]);
       directoryText.innerHTML +=  productText[1];
      break;
      case el.classList.contains("img-three"):
       largePhotoViewer.setAttribute("src",largeImgs[2]);
       directoryText.innerHTML +=  productText[2];
      break;
      case el.classList.contains("img-four"):
       largePhotoViewer.setAttribute("src",largeImgs[3]);
       directoryText.innerHTML +=  productText[3];
      break;
      default:
      largePhotoViewer.setAttribute("src",largeImgs[0]);
      directoryText.innerHTML +=  productText[0];
    }
  }
})
