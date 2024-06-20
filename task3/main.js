document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('pages').value = getPages();
    document.getElementById('author').value = getAuthor();

    document.getElementById('bookForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let valid = true;

        const title = document.getElementById('title').value;
        if (Symbols(title)) {
            document.getElementById('title').value = '';
            document.getElementById('titleError').textContent = 'წიგნის სათაური შეიცავს დაუშვებელ სიმბოლოებს (#, $, !)';
            valid = false;
        } else {
            document.getElementById('titleError').textContent = '';
        }
        
        const price = document.getElementById('price').value;
        if (!isNumber(price)) {
            document.getElementById('priceError').textContent = '';
            valid = false;
        } else {
            document.getElementById('priceError').textContent = '';
        }

        const pages = parseInt(document.getElementById('pages').value, 10);
        document.getElementById('copies').value = calculate(pages);

        if (valid) {
            alert('Book added successfully!');
        }
    });
});

function Symbols(str) {
    const invalidSymbols = ['#', '$', '!'];
    for (const symbol of invalidSymbols) {
        if (str.includes(symbol)) {
            return true;
        }
    }
    return false;
}

function getPages() {
    return Math.floor(Math.random() * (500 - 100 + 1)) + 100;
}

function getAuthor() {
    const authors = ['gabriel', 'putkaradze', 'sohka', 'mentesha'];
    const randomIndex = Math.floor(Math.random() * authors.length);
    return authors[randomIndex];
}

function isNumber(value) {
    const number = parseInt(value, 10);
    return Number.isInteger(number) && number >= 10 && number < 100;
}

function calculate(pages) {
    return Math.floor(pages * 0.2);
}



