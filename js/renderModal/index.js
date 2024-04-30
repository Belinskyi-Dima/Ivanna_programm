
import {renderModalIngradientList, updateInputTotalValue, updateNameValue} from "../renderModalIngradientList/index.js";
import addIngradientToProgram from '../addIngradientToProgram/addIngradientToProgram.js';
import totalCount from "../totalCount/index.js";
import addLockalStorage from "../addLockalStorage/index.js";
function renderModal(list, id, kkalList ) {
   
    const contentBox = document.querySelector(".product-preview");
    let count = 1;
    // let totalMidleValue = null;
    
    const el = list.find(item=>item.id === id);
    // console.log("resss ",el);
    if (el) {
        contentBox.style.display = 'flex';
    }
    const validSubtitle = el.subTitle !== "null" && el.subTitle !== null ? el.subTitle : "";
    
    const {totalMidleValue, ingredientsList} =  renderModalIngradientList(el, kkalList)
console.log(totalMidleValue);

    let sumTotal = null
    if (totalMidleValue) {
           if (totalMidleValue.toString().includes('.') && totalMidleValue.toString().split('.')[1].length > 2) {
                sumTotal = parseFloat(totalMidleValue.toFixed(2));
            } else {
                sumTotal = totalMidleValue;
            }
    }
 
    contentBox.insertAdjacentHTML("beforeend", `
    <li class="preview  active" data-target="${el.id}">
    <i class="fas fa-times"></i>
    <img class="preview_img" src="./img/img-${count}.jpg" alt="preview">
    <h3 class="prevew_name">${el.nameDishes}</h3>
    
    <div  class="dropdown">
        <button class="dropdown-btn filter-btn">${el.mealDefault}</button>
        <i class="fas fa-chevron-down"></i>
        <div class="dropdown-content">
            <a data-day="breakfast" href="#">сніданок</a>
            <a  data-day="dinner" href="#">обід</a>
            <a  data-day="snack " href="#">перекус</a>
            <a  data-day="dinner" href="#">вечеря</a>
        </div>
    </div>
    <div class="textarea-box">
        <textarea class="textarea" placeholder="тут пишемо як готувати !!!!" name="" id="textarea" cols="" rows="">${el.Cooking}</textarea>
        <i class="fas fa-times textarea-clear"></i>
    </div>

    
    <ul class="preview-info_list">
    ${ingredientsList}
    </ul>
    <div class="preview_plus-box">
        <i class="fas fa-plus"></i>
    </div>
 
    <div class="product_total">
        <span class="preview_total-name">Total Kall: </span>
        <span class="preview_total-amount">${sumTotal}</span>
    </div>
    <div class="product_btn">
    <a class="btn_add" href="#">add</a>
    <a class="btn_edit" href="#">edit</a>
</div>
</li>
    `);

    const  textarea = document.getElementById('textarea');
    const taClean = document.querySelector(".textarea-clear")

    textarea.addEventListener('input', function() {

        this.style.height = '5px';
        this.style.height = (this.scrollHeight) + 'px';
    });
    taClean.addEventListener("click", () =>{
        textarea.value = "";
    })


        const addIngr = document.querySelector('.fa-plus');
        addIngr.addEventListener("click", (e)=> addIngradientToProgram(e,kkalList));
  
        const parentLI = document.querySelectorAll('.preview-info_item');
        console.log("parentLI ",parentLI.length);

        parentLI.forEach(item => {
            const inputsName = item.querySelector('[data-input="defualt_name"]');
            const inputMg = item.querySelector('[data-input="defualt_mg"]');
            const kkalInput = item.querySelector('[data-input="defualt_kkal"]');
            const inputsTotal = item.querySelector('[data-input="defualt_total"]');

            inputsName.addEventListener("change", (event) =>{
                updateNameValue(event,)
            })

            inputMg.addEventListener("change", function() {
                updateInputTotalValue(event, kkalInput, inputsTotal);

        });
        });
    

    const dropdowns = document.querySelectorAll('.dropdown');

// Додаємо подію для кожного dropdown
dropdowns.forEach(function(dropdown) {
    // Знаходимо dropdown-content в межах кожного dropdown
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    // Отримуємо кнопку відкриття dropdown
    const dropdownButton = dropdown.querySelector('.dropdown-btn');

    // Додаємо подію при кліці на dropdown
    dropdownButton.addEventListener('click', function() {
        // Перевіряємо, чи dropdown-content відображений
        if (dropdownContent.style.display === 'block') {
            // Якщо відображений, то ховаємо його
            dropdownContent.style.display = 'none';
        } else {
            // Якщо прихований, то показуємо його
            dropdownContent.style.display = 'block';
        }
    });

    // Додаємо обробник подій для кожного елемента dropdown-content
    dropdownContent.addEventListener('click', function(event) {
        // Забороняємо подальше розповсюдження події
        event.stopPropagation();
        
        // Отримуємо текст пункту
        const text = event.target.innerText;
        
        // Оновлюємо текст кнопки dropdown
        dropdownButton.textContent = text;

        // Ховаємо dropdown-content
        dropdownContent.style.display = 'none';
    });
});

    const btnAdd = document.querySelector(".btn_add");
    btnAdd.addEventListener("click", () => {
    const previewImg = document.querySelector('.preview_img').getAttribute("href");
    const prevewName = document.querySelector('.prevew_name');
    const dayInWeek = document.querySelector('.dropdown-btn');
    const textArea = document.querySelector('.textarea');
    const previewItems = document.querySelectorAll('.preview-info_item');
    const preview_total = document.querySelector('.preview_total-amount')
   
        const cardObj = {
            product_imgUrl:previewImg,
            product_name: prevewName.textContent,
            product_meal: dayInWeek.textContent,
            product_cooking : textArea.textContent,
            "igradients":{},
            totel_kkal: preview_total.textContent

            
        }
        previewItems.forEach(item=> {
            const defaultName = item.querySelector('[data-input="defualt_name"]').value;
            const defaultMg = item.querySelector('[data-input="defualt_mg"]').value;
            const defaultKkal = item.querySelector('[data-input="defualt_kkal"]').value;
            const defaultTotal = item.querySelector('[data-input="defualt_total"]').value;

            cardObj['igradients'][defaultName] = {
                "ingradient_mg": defaultMg,
                "ingradient_kkal": defaultKkal,
                "ingradient_total": defaultTotal
            }
            
        })
    
        addLockalStorage("name user",cardObj)
    })

    }

export default renderModal;
