document.getElementById('Numbers').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const n = parseInt(document.getElementById('n').value);
    const k = parseInt(document.getElementById('k').value);
    const p = parseInt(document.getElementById('p').value);
    
    const result = generateNumbers(n, k, p);
    
    const resultList = document.getElementById('result');
    resultList.innerHTML = '';
    result.forEach(number => {
        const listItem = document.createElement('li');
        listItem.textContent = number;
        resultList.appendChild(listItem);
    });
});

function generateNumbers(n, k, p) {
    const Numbers = [];
    
    for (let i = k; i <= p; i++) {
        if (i % 2 !== 0) {
            Numbers.push(i);
        }
    }
    
    if (n > Numbers.length) {
        alert('');
        return [];
    }
    
    const randomNumbers = [];
    while (randomNumbers.length < n) {
        const randomIndex = Math.floor(Math.random() * Numbers.length);
        const Number = Numbers.splice(randomIndex, 1)[0];
        randomNumbers.push(Number);
    }
    
    return randomNumbers;
}
