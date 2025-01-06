const fruitSelect = document.getElementById('fruitSelect');
const selectValue = document.getElementById('selectValue');

fruitSelect.addEventListener('change', () => {
    selectValue.textContent = fruitSelect.value;
})