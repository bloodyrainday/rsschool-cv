const wrapperElement = document.createElement('div');
const tableElement = document.createElement('table');
const rowsElement  = document.createElement('tr');
const cellsElement = document.createElement('td');
const checkButtonElement = document.createElement('button');
const cloneRowsElement = rowsElement.cloneNode(5);
const rowsCount = 7;
const rows = '<tr></tr>';
const cells = '<td></td>';
const cellsCount = 7;

body.prepend(wrapperElement);
wrapperElement.prepend(tableElement);
wrapperElement.setAttribute('class', 'wrapper');

wrapperElement.append(checkButtonElement);
checkButtonElement.setAttribute('class', 'check-result-button');
checkButtonElement.textContent = 'check the result';

tableElement.innerHTML = rows.repeat(rowsCount);

document.querySelectorAll('tr').forEach(item => {
  item.innerHTML = `${cells.repeat(cellsCount)}`;
})

const rowsTable = document.querySelectorAll('tr');
const cellsTable = document.querySelectorAll('td');


/*for (let i = 0; i < rowsTable.length; i++) {
  let cellsInRow = rowsTable[i].childNodes;

  rowsTable[0].style.backgroundColor = 'black';

  for (let j = 0; j < cellsInRow.length; j++) {
    console.log(cellsInRow[0])

  }
}*/



  
  cellsTable[0].style.backgroundColor = 'black';
  cellsTable[1].style.backgroundColor = 'black';
  cellsTable[7].style.backgroundColor = 'black';
  cellsTable[8].style.backgroundColor = 'black';

  cellsTable[0].style.cursor = 'auto';
  cellsTable[1].style.cursor = 'auto';
  cellsTable[7].style.cursor = 'auto';
  cellsTable[8].style.cursor = 'auto';

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

  cellsTable[23].style.border = '5px solid black';
  cellsTable[24].style.border = '5px solid black';
  cellsTable[25].style.border = '5px solid black';
  cellsTable[26].style.border = '5px solid black';
  cellsTable[27].style.border = '5px solid black';

  cellsTable[30].style.border = '5px solid black';
  cellsTable[31].style.border = '5px solid black';
  cellsTable[32].style.border = '5px solid black';
  cellsTable[33].style.border = '5px solid black';
  cellsTable[34].style.border = '5px solid black';

  cellsTable[37].style.border = '5px solid black';
  cellsTable[38].style.border = '5px solid black';
  cellsTable[39].style.border = '5px solid black';
  cellsTable[40].style.border = '5px solid black';
  cellsTable[41].style.border = '5px solid black';

  cellsTable[44].style.border = '5px solid black';
  cellsTable[45].style.border = '5px solid black';
  cellsTable[46].style.border = '5px solid black';
  cellsTable[47].style.border = '5px solid black';
  cellsTable[48].style.border = '5px solid black';

  function putCrossInCell(cell) {
    const createCross = document.createElement('span');
    createCross.setAttribute('class', 'cross');
    cell.prepend(createCross);
  }

  /* filling the table start */

  cellsTable.forEach((item, index) => {
    item.setAttribute('oncontextmenu', 'return false');
    if ((index >= 16 && index <= 20) || (index >= 23 && index <= 27) || (index >= 30 && index <= 34) || (index >= 37 && index <= 41) || (index >= 44 && index <= 48)) {
      item.addEventListener('click', () => {
        if (item.firstChild) {
          const removeElement = item.firstChild;
          removeElement.remove();
        }
        item.classList.toggle('black');
      })
      item.addEventListener('contextmenu', () => {
        item.classList.remove('black')
        if (item.firstChild) {
          const removeElement = item.firstChild;
          removeElement.remove();
        } else {
          putCrossInCell(item);
        }
      })
    }
  })

   /* filling the table end */

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



checkButtonElement.addEventListener('click', () => {
  if (cellsTable[16].classList.contains('black') && 
      cellsTable[17].classList.contains('black') && 
      cellsTable[23].classList.contains('black') && 
      cellsTable[24].classList.contains('black') && 
      cellsTable[19].classList.contains('black') && 
      cellsTable[20].classList.contains('black') && 
      cellsTable[26].classList.contains('black') && 
      cellsTable[27].classList.contains('black') && 
      cellsTable[37].classList.contains('black') && 
      cellsTable[41].classList.contains('black') && 
      cellsTable[45].classList.contains('black') && 
      cellsTable[46].classList.contains('black') && 
      cellsTable[47].classList.contains('black')) {
    console.log('win')
  }
})