function totalCount() {
    
    const list = document.querySelectorAll('[data-input="defualt_total"]');
    const totalAmount = document.querySelector('.preview_total-amount');

    console.log("totalCount element=============> ",list.length);
    let count = 0
    list.forEach(el => {
        // console.log( typeof el.value);
        count += Number(el.value)
    });
    console.log(count);
    if (count.toString().includes('.') && count.toString().split('.')[1].length > 2) {
        count = parseFloat(count.toFixed(2));
    } else {
        count = count;
    }
    totalAmount.textContent = count;
}
export default totalCount;