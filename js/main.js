(function generateTable() {
    const table = document.createElement('table');
    const tblBody = document.createElement('tbody');
    let count = 1;
    
    for (let r = 0; r < 10; r++) {
       const row = document.createElement('tr'); 
    
        for (let c = 0; c < 10; c++) {
            const cell = document.createElement('td');
            cell.style.padding = '10px';
            cell.textContent = count;
            row.append(cell);
            count++;
        }
        tblBody.append(row);
    }
    
    table.append(tblBody);
    table.setAttribute("border", "1");
    table.style.borderSpacing = '0';
    table.style.textAlign = 'center';
    document.body.append(table);     
})();