
async function getAllList(list) {
    // console.log(list);
    const url = 'program_list.json';
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        return Object.values(data)
        const arr = Object.values(data)
        // console.log("arr== ",arr);
        // console.log( list[0] );
        return arr.filter(item=> item.mealDefault === list[0])
            
        
        
    } catch (error) {
        console.error('Помилка отримання даних:', error);
    }
}

export default getAllList;
