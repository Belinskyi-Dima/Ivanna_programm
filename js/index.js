import  getAllList  from "./getAllList/index.js";
import  renderHtml  from "./renderHtml/index.js";
import renderModal from "./renderModal/index.js";
import removeModal from "./removeModal/index.js";
import getKkalList from "./getKkalList/getKkalList.js"
//  import addIngradientToProgram from './addIngradientToProgram/addIngradientToProgram.js';

const listData = await getAllList()
const kkalList = await getKkalList();
// console.log("kkalList ==> ",kkalList);

renderHtml(listData)
// console.log("2",res);

const previewContainer  = document.querySelector(".product-preview");
const previewBox = document.querySelectorAll(".preview");

// console.log("previewBox", previewContainer);
document.querySelectorAll(".product-container .product").forEach(product => {
    product.onclick = () => {
        let id = product.getAttribute("data-name");
        console.log("name",id);
        previewContainer.innerHTML = "";
        document.body.classList.toggle("modal-open")
        renderModal(listData, id, kkalList)
        // const addIngr = document.querySelector('.fa-plus');
        // addIngr.addEventListener("click", addIngradientToProgram);

        removeModal(previewContainer)
    
    }

});


// opoenBackDrop.addEventListener("click", openModal);
// function openModal() {
// 	backDrop.classList.toggle("is-hidden");
// 	document.body.classList.toggle("modal-open");
	
// }



window.addEventListener('click', function(event) {
    // console.log(event.target);
    if (event.target == previewContainer && previewContainer.contains(event.target)) {
        // Якщо клікнуто поза модальним вікном, закриваємо його
        document.body.classList.toggle("modal-open")
        previewContainer.style.display = 'none';
    } 

});
