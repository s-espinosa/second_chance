import { patterns } from "./modules/patterns";
import "./main.css";

const starterDiv = document.querySelector('#starter');
const piecesDiv = document.querySelector('#pieces');

if (starterDiv != null) {
  addRandomStarter(patterns['startingPatterns'])
} else {
  addNormalShapes()
}


// ADD STARTING SHAPE
function addRandomStarter(patterns) {
  const startingShape = randomStarter(patterns)
  starterDiv.appendChild(startingShape)
}

function randomStarter(patterns) {
  const startingPattern = shufflePop(patterns)
  let shape = largeShape(startingPattern)
  return shape
}

function shufflePop(array) {
  return array[Math.floor(Math.random() * array.length)]
}


// ADD NORMAL SHAPES
function addNormalShapes() {
  const normalPatterns = patterns['normalPatterns']
  const startingShapes = shapeCollection(normalPatterns)
  console.log(startingShapes)
  // add shapes to admin page in rows of 5
}

function shapeCollection(shapePatterns) {
  let shapeCollection = []
  shapePatterns.forEach((pattern) => {
    let quantity = pattern['count']
    let cells = pattern['cells']
    for(var i=0; i < quantity; i++){
      let shape = smallShape(pattern)
      shapeCollection.push(shape)
    }
  })
  return shapeCollection
}

// HELPERS
function largeShape(pattern) {
  return shape('large', pattern)
}

function smallShape(pattern) {
  return shape('small', pattern)
}

function shape(size, pattern) {
  let shape = emptyShape()
  pattern.cells.forEach((rowPattern) => {
    let rowElement = populatedRow(rowPattern, size)
    shape.appendChild(rowElement)
  })
  return shape
}

function populatedRow(rowPattern, size) {
  let rowElement = emptyRow()
  rowPattern.forEach((cell) => {
    if(cell === 1) {
      rowElement.appendChild(cellElement(`occupied ${size} cell`))
    } else {
      rowElement.appendChild(cellElement(`empty ${size} cell`))
    }
  })
  return rowElement
}

function emptyShape() {
  let shape = document.createElement('div')
  shape.setAttribute('class', 'shape')
  return shape
}


// CELL HELPERS
function cellElement(classes) {
  const cell = document.createElement("div");
  cell.setAttribute('class', classes)
  return cell
}

// ROW HELPERS
function emptyRow() {
  const row = document.createElement("div");
  row.setAttribute('class', 'row')
  return row
}

