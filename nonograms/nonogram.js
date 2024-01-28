const wrapperElement = document.createElement('div');
const tableElement = document.createElement('table');
const rowsElement  = document.createElement('tr');
const cellsElement = document.createElement('td');
const cloneRowsElement = rowsElement.cloneNode(5);
const rowsCount = 7;
const rows = '<tr></tr>';
const cells = '<td></td>';
const cellsCount = 7;

body.prepend(wrapperElement);
wrapperElement.prepend(tableElement);
wrapperElement.setAttribute('class', 'wrapper');

tableElement.innerHTML = rows.repeat(rowsCount);

document.querySelectorAll('tr').forEach(item => {
  item.innerHTML = `${cells.repeat(cellsCount)}`;
})

const rowsTable = document.querySelectorAll('tr');
const cellsTable = document.querySelectorAll('td');


for (let i = 0; i <= cellsTable.length; i++) {
  
  cellsTable[0].style.backgroundColor = 'black';
  cellsTable[1].style.backgroundColor = 'black';
  cellsTable[7].style.backgroundColor = 'black';
  cellsTable[8].style.backgroundColor = 'black';

  cellsTable[14].textContent = '2';
  cellsTable[15].textContent = '2';
  cellsTable[21].textContent = '2';
  cellsTable[22].textContent = '2';
  cellsTable[35].textContent = '1';
  cellsTable[36].textContent = '1';
  cellsTable[43].textContent = '3';

  cellsTable[16].style.border = '5px solid black';
  cellsTable[17].style.border = '5px solid black';
  cellsTable[18].style.border = '5px solid black';
  cellsTable[19].style.border = '5px solid black';
  cellsTable[20].style.border = '5px solid black';

  
}

for (let i = 2; i <= 7; i++) {
  if (i === 4) {
    cellsTable[i].textContent = '';
  } else {
    cellsTable[i].textContent = '2';
  }
}

for (let i = 9; i <= 13; i++) {
    cellsTable[i].textContent = '1';
}
