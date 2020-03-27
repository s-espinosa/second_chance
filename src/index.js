import { patterns } from "./javascript/patterns"

const pieces = document.querySelector('#pieces');

let startingPatterns = patterns['startingPatterns']
let normalPatterns = patterns['normalPatterns']

startingPatterns.forEach((pattern) => {
  let shape = createShape(pattern)
  pieces.appendChild(shape)
})

normalPatterns.forEach((pattern) => {
  let shape = createShape(pattern)
  pieces.appendChild(shape)
})

function createShape(pattern) {
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
  cell.setAttribute('class', 'empty cell')
  return cell
}

function occupiedCell() {
  let cell = document.createElement("div");
  cell.setAttribute('class', 'occupied cell')
  return cell
}

function emptyRow() {
  let row = document.createElement("div");
  row.setAttribute('class', 'row')
  return row
}


