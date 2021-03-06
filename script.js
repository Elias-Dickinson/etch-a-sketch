const makeRows = (rows, cols) =>{
  const container = document.querySelector('#container');
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < rows * cols; c++) {
    const cell = document.createElement('div');
    container.appendChild(cell).className = 'cell';
    cell.addEventListener('mouseover', ()=> cell.style.backgroundColor = 'black');
  }
}
const reset = () => {
  container.innerHTML = '';
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell=>cell.style.backgroundColor = 'white');
  const size = prompt('How many rows and columns do you want your grid to be?');
  //location.reload();
  makeRows(size, size);
}
makeRows(16, 16);
resetBtn.addEventListener('click', ()=>reset());
