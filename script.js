function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < rows * cols; c++) {
    const cell = document.createElement('div');
    container.appendChild(cell).className = 'cell';
    cell.addEventListener('mouseover', ()=> cell.style.backgroundColor = 'black');
  }
}
function reset(){
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell=>cell.style.backgroundColor = 'white');
  const size = prompt('How many rows and columns do you want your grid to be?');
  //location.reload();
  makeRows(size, size);
}
makeRows(4, 4);
