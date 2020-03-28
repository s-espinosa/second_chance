import { patterns } from "./modules/patterns"

const starter = document.querySelector('#starter');

let startingPatterns = patterns['startingPatterns']

let startingPattern = startingPatterns[Math.floor(Math.random() * startingPatterns.length)]

let shape = createStarter(startingPattern)
starter.appendChild(shape)

function createStarter(pattern) {
  let shape = document.createElement('div')
  shape.setAttribute('class', 'shape')

  let cells = pattern.cells
  cells.forEach((row) => {
    let rowElement = emptyRow()
    row.forEach((cell) => {
      if(cell === 1) {
        rowElement.appendChild(occupiedCell())
      } else {
        rowElement.appendChild(emptyCell())
      }
    })
    shape.appendChild(rowElement)
  })
  return shape
}

function emptyCell() {
  let cell = document.createElement("div");
  cell.setAttribute('class', 'empty large cell')
  return cell
}

function occupiedCell() {
  let cell = document.createElement("div");
  cell.setAttribute('class', 'occupied large cell')
  return cell
}

function emptyRow() {
  let row = document.createElement("div");
  row.setAttribute('class', 'row')
  return row
}


