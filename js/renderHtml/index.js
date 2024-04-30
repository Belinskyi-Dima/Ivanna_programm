function renderHtml(list) {
    const contentBox = document.querySelector(".product-container")
    let count = 1;
    list.forEach(el => {
        // console.log(el.id);
        const validSubtitle = el.subTitle !== "null" && el.subTitle !== null ? el.subTitle : "";

        const ingredientsList = Object.entries(el.igradients).map(([ingredient, amount]) => {
            // console.log(ingredient, amount);
            const validAmount = amount? amount : "";
            
            // <li class="item__info-box__ingradients-item">${ingredient}: ${amount}мг</li>
            return `
                <li class="product-info_item">
                    <span class="product-info_name">${ingredient}</span>
                    <span class="product-info_name">${validAmount}</span>
                    
            
                </li>
            `;

        }).join('');

        contentBox.insertAdjacentHTML("beforeend", `
        <li class="product" data-name="${el.id}">
        <img class="product_img" src="./img/img-${count}.jpg" alt="1">
        <h3 class="product-name">${el.nameDishes }</h3>
        <p class="product_subtitle">${validSubtitle}</p>
        <ul class="product-info_list">
        ${ingredientsList}

        </ul>
        <div class="product_total-box ">
            <span class="product_total-name">Total Kall: </span>
            <span class="product_total-amount">111</span>
        </div>
    </li>
        `)
        count +=1
    });

}
export default  renderHtml;
{/* <li class="product-info_item">
<span class="product-info_name">${ingredient}</span>
<label class="product-info_label" for="">
    <input class="product-info_input" data-input="defualt_mg" type="text"value="${validAmount}">mg
</label>
<label class="product-info_label" for="">
    <input class="product-info_input" data-input="defualt_kkain" type="text"value="200">100 kkal
</label>
<label class="product-info_label" for="">
    <input class="product-info_input" data-input="defualt_total" type="text"value="100">total kkal
</label>
</li> */}