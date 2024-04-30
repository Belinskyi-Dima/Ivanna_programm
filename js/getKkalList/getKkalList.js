async function getKkalList() {
    const url = 'kkal_list.json';
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log("data",data);
        return Object.values(data)
    } catch (error) {
        console.error('Помилка отримання даних:', error);
    }
}
export default getKkalList;