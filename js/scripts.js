const id = (id) => {
    return document.getElementById(id);
}
/**
 * Increase or decrease target {number} value
 * @param targetId - target input id
 * @param incrementId - increment button id
 * @param decrementId - decrement button id
 */
const counterHandler = (targetId, incrementId, decrementId) => {
    const target = id(targetId);
    const incrementBtn = id(incrementId);
    const decrementBtn = id(decrementId);
    incrementBtn.addEventListener('click', () => {
        const prevValue = Number.parseInt(target.value);
        target.value = prevValue + 1;
    })
    decrementBtn.addEventListener('click', () => {
        const prevValue = Number.parseInt(target.value);
        if (prevValue <= 0) {
            return;
        }
        target.value = prevValue - 1;
    })
}

(() => {
counterHandler('rooms', 'incrementRooms', 'decrementRooms');
counterHandler('adults', 'incrementAdults', 'decrementAdults');
counterHandler('children', 'incrementChildren', 'decrementChildren');
})()



// Datepicker

const monthNames = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
];
picker.on('selected', (date1, date2) => {
    console.log(date1, date2);
    setDatesPlaceholders(date1, date2)
});

const getEnterPlaceholder =(date) =>{
    const enterMonthIndex = date.getMonth();
    const enterDay = (date.getDate());
    console.log(enterDay);
    return `${enterDay} ${monthNames[enterMonthIndex]}`;
};
const getLeavePlaceholder =(date) =>{
    const leaveMonthIndex = date.getMonth();
    const enterDay = (date.getDate());
    return `${enterDay} ${monthNames[leaveMonthIndex]}`;
}
const setDatesPlaceholders = (date1,date2) =>{
    id('enterDate').innerText = getEnterPlaceholder(date1);
    id('leaveDate').innerText = getLeavePlaceholder(date2);
}
