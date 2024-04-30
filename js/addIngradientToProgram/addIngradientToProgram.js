import {inputMidleAmound} from "../renderModalIngradientList/index.js";
import totalCount from "../totalCount/index.js"

function addIngradientToProgram (event, kkalList) {
    // console.log("add => ",event.target);
    const ulIngradient = document.querySelector(".preview-info_list")
    console.log("add click => ",event.currentTarget);
    // console.log(ulIngradient);
    ulIngradient.insertAdjacentHTML("beforeend", `
    <li class="preview-info_item">
    <label class="preview-info_label" for="">
        <input class="preview-info_input preview-info_input--title" data-input="defualt_name" type="text" value="">
        <span class="preview-input__name">Name</span>
    </label>
    <label class="preview-info_label" for="">
        <input class="preview-info_input" data-input="defualt_mg" type="text" value="">
        <span class="preview-input__name">г</span>
    </label>
    <label class="preview-info_label" for="">
        <input class="preview-info_input defualt_kkal" data-input="defualt_kkal" type="text" value="" readonly>
        <span class="preview-input__name">100гр</span>
    </label>
    <label class="preview-info_label" for="">
        <input class="preview-info_input" data-input="defualt_total" type="text" value="">
        <span class="preview-input__name">total</span>
    </label>
</li>
    `)
    valueAddedItem(ulIngradient, kkalList)

    
}

function valueAddedItem(ulIngradient, kkalList) {
    const newItemNameInput = ulIngradient.querySelector('.preview-info_item:last-child [data-input="defualt_name"]');
    const newItemDefualtKkal = ulIngradient.querySelector('.preview-info_item:last-child [data-input="defualt_kkal"]');
    const newItemEnterMg = ulIngradient.querySelector('.preview-info_item:last-child [data-input="defualt_mg"]');
    const newItemInputTotal = ulIngradient.querySelector('.preview-info_item:last-child [data-input="defualt_total"]');


    newItemNameInput.addEventListener("change", function() {
        const newItemNameValue = newItemNameInput.value;
        console.log("Значення нового елемента:", newItemNameValue);

        const kkalAmount = kkalList.find(item => item["Продукт"].toLocaleLowerCase().includes(newItemNameValue.toLocaleLowerCase()))
        newItemDefualtKkal.value = kkalAmount['ккал']

        console.log("newItemNameInput value => ",newItemDefualtKkal.value);
        // console.log(newItemInputTotal.value);
        if (newItemDefualtKkal.value && newItemEnterMg.value) {
   
            newItemInputTotal.value = inputMidleAmound(newItemEnterMg.value, newItemDefualtKkal.value)
            // console.log(newItemInputTotal.value);
            totalCount()
        }
    });

    newItemEnterMg.addEventListener("change", function(e) {
        const newItemEnterMgValue = newItemEnterMg.value;
        console.log("newItemEnterMgValue <===", newItemEnterMgValue );

        if (newItemDefualtKkal.value && newItemEnterMgValue) {
            newItemInputTotal.value = inputMidleAmound(newItemDefualtKkal.value, newItemEnterMgValue)
            totalCount()
        }
    })

}
export default addIngradientToProgram;