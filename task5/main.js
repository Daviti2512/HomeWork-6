document.getElementById('table').addEventListener('submit', function(event) {
    event.preventDefault();
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);

    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert('');
        return;
    }

    const tableContainer = document.getElementById('Container');
    tableContainer.innerHTML = ''; 

    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('td');
            const num = (i * cols) + j + 1;
            cell.textContent = num;
            if (num % 2 === 0) {
                cell.className = 'even';
            } else {
                cell.className = 'odd';
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    tableContainer.appendChild(table);
    document.querySelector('h1').textContent = `Table with ${rows * cols} numbers`;
});