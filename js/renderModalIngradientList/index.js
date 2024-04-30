import totalCount from "../totalCount/index.js";

function renderModalIngradientList(el, kkalList) {
    let totalMidleValue = null;

    const ingredientsList = Object.entries(el.igradients).map(([ingredient, amount]) => {

        const kkalAmount = kkalList.find(item => item["Продукт"].toLocaleLowerCase().includes(ingredient.toLocaleLowerCase()))
        
        let midlValueKall = "";
        let kkalDefualt = "";

        if (kkalAmount) {
            const kkalAmountValue  = kkalAmount["ккал"];
             midlValueKall  = inputMidleAmound(kkalAmountValue, amount)
            totalMidleValue += midlValueKall;
            kkalDefualt = kkalAmount["ккал"]? kkalAmount["ккал"] : "";
        }

        const validAmount = amount? amount : "";
        return `
                <li class="preview-info_item">
                    <label class="preview-info_label" for="">
                        <input class="preview-info_input preview-info_input--title" data-input="defualt_name" type="text" value="${ingredient}">
                        <span class="preview-input__name">Name</span>
                    </label>
                    <label class="preview-info_label" for="">
                        <input class="preview-info_input" data-input="defualt_mg" type="text" value="${validAmount}">
                        <span class="preview-input__name">г</span>
                    </label>
                    <label class="preview-info_label" for="">
                        <input class="preview-info_input defualt_kkal" data-input="defualt_kkal" type="text" value="${kkalDefualt}" readonly>
                        <span class="preview-input__name">100гр</span>
                    </label>
                    <label class="preview-info_label" for="">
                        <input class="preview-info_input" data-input="defualt_total" type="text" value="${midlValueKall}">
                        <span class="preview-input__name">total</span>
                    </label>
                </li>
        `;

    }).join('');

    return {totalMidleValue, ingredientsList};
}

function updateNameValue(event) {
    console.log(" function updateNameValue",event.target.value);
}

function updateInputTotalValue(event, kkalInput, inputsTotal) {
    console.log(event.target.value);
    const resInputMidleAmound = inputMidleAmound( event.target.value, kkalInput.value)
    // console.log("resInputMidleAmound",resInputMidleAmound);
    inputsTotal.value = resInputMidleAmound;
    totalCount()

}

function inputMidleAmound(kkalAmountEnter, amount) {
    // console.log(typeof kkalAmount,typeof amount);
    let midlValueKall = kkalAmountEnter ? Number(kkalAmountEnter) / 100 *  Number(amount) : "";
            if (midlValueKall.toString().includes('.') && midlValueKall.toString().split('.')[1].length > 2) {
                midlValueKall = parseFloat(midlValueKall.toFixed(2));
            } else {
                midlValueKall = midlValueKall;
            }
    return midlValueKall
}

export  {renderModalIngradientList, updateInputTotalValue,updateNameValue, inputMidleAmound}