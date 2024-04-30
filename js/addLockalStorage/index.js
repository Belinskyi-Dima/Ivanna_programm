// function addLockalStorage(obj) {
//     const days = ['понеділок','вівторок', 'середа', 'четвер', 'пятниця', "субота", ,'неділя' ];
//     console.log(obj.product_meal);
//     if (!localStorage.getItem('понеділок')) {
   
//         // const [obj.product_meal] = {  ...obj };
//         const melas = {
//             [obj.product_meal]:{...obj}
//         }
//         const jsonString = JSON.stringify(melas);
//         localStorage.setItem('понеділок', jsonString);
    

//     } else {

//         const mondayMeals = JSON.parse(localStorage.getItem('понеділок'));

//         if (!mondayMeals.product_meal) {

//             const melas = {
//                 [obj.product_meal]:{...obj}
//             }
//             const jsonProducMelasString = JSON.stringify(melas);
    
//             mondayMeals.product_meal = jsonProducMelasString;
//             localStorage.setItem('понеділок', JSON.stringify(mondayMeals));
    
//         } else {

//             const melas = {
//                 [obj.product_meal]:{...obj}
//             }
//             localStorage.setItem('вівторок', JSON.stringify(melas));
//             console.log('Записано об\'єкт у вівторок, оскільки об\'єкт "product_day" вже існує у понеділок.');
//         }
//     }
// }




// function addLockalStorage(nameUser,obj) {
//     // const days = ['понеділок', 'вівторок', 'середа', 'четвер', 'пятниця', 'субота', 'неділя'];
//     const melas = {
//                     [obj.product_meal]:{...obj}
//                 }
//     console.log("===> ",melas);

//     if (!localStorage.getItem(nameUser)) {
//         console.log("no have понеділок");
//         const objDays = {
//             'понеділок': {},
//             'вівторок': {},
//             'середа': {},
//             'четвер': {},
//             'пятниця': {},
//             'субота': {},
//             'неділя': {}
//         }
//         const jsonString = JSON.stringify(objDays);
//         localStorage.setItem([nameUser], jsonString);
//     }  else{
//         const lock = localStorage.getItem(nameUser)
//         const arrKeys = Object.keys(JSON.parse(lock));
//         for (const item of arrKeys) {
//             console.log(item);
//             if (!item[obj.product_meal]) {
//                 item[obj.product_meal] = melas;
//                 const jsonString = JSON.stringify(item);
//         localStorage.setItem(nameUser, jsonString);
//             } else {

//             }
//         }
//         console.log();
   


        
//         //     const jsonString = JSON.stringify(melas);
//         //     localStorage.setItem(days[1], jsonString);
//     }


// }

function addLockalStorage(fff, obj) {
    const daysOfWeek = ['понеділок', 'вівторок', 'середа', 'четвер', 'пятниця', 'субота', 'неділя'];

    // Перевіряємо, чи є прийом їжі obj.product_meal вже в локальному сховищі
    for (let i = 0; i < daysOfWeek.length; i++) {
        const day = daysOfWeek[i];
        const mealsJSON = localStorage.getItem(day);
        if (!mealsJSON) {
            // Якщо для даного дня немає даних, додаємо їх та завершуємо цикл
            const meals = { [obj.product_meal]: obj };
            localStorage.setItem(day, JSON.stringify(meals));
            console.log(`Додано в ${day}:`, obj);
            break;
        } else {
            const meals = JSON.parse(mealsJSON);
            if (!meals[obj.product_meal]) {
                // Якщо для даного дня немає прийому їжі obj.product_meal, додаємо його та завершуємо цикл
                meals[obj.product_meal] = obj;
                localStorage.setItem(day, JSON.stringify(meals));
                console.log(`Додано в ${day}:`, obj);
                break;
            }
        }
    }
}
export default addLockalStorage;