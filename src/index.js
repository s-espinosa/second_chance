import { patterns } from "./modules/patterns";
import "./main.css";

const starterDiv = document.querySelector('#starter');
const piecesDiv = document.querySelector('#pieces');


if (starterDiv != null) {
  addRandomStarter(patterns['startingPatterns'])
} else {
  addNormalShapes()
}

piecesDiv.onclick = function(event) {
  let target = event.target.closest('.small-shape')
  if (!target) return
  target.childNodes.forEach((row) => {
    row.childNodes.forEach((cell) => {
      if (cell.classList.contains('occupied')) {
        cell.classList.add('used')
      }
    })
  })
  let large = target.cloneNode(true)
  large.classList.remove('small-shape')
  large.classList.add('large-shape')
  large.childNodes.forEach((row) => {
    row.childNodes.forEach((cell) => {
      cell.classList.remove('small-cell')
      cell.classList.remove('used')
      cell.classList.add('large-cell')
      if (cell.classList.contains('occupied')) {
        cell.classList.add('active')
      }
    })
  })

  const currentDiv = document.querySelector('#current');
  console.log(currentDiv.children[0])
  if (currentDiv.children[0]) {
    currentDiv.replaceChild(large, currentDiv.children[0])
  } else {
    currentDiv.appendChild(large)
  }
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
  const normalShapes = shapeCollection(normalPatterns)
  addShapes(normalShapes)
  // add script to each shape that makes it current shape and turns it off when it's clicked
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

function addShapes(shapes) {
  let i = 1
  let shapeRow = emptyShapeRow()
  shapes.forEach((shape) => {
    shapeRow.appendChild(shape)
    if(i % 6 == 0) {
      piecesDiv.appendChild(shapeRow)
      shapeRow = emptyShapeRow()
    }
    i = i + 1
  })
}


// HELPERS
function largeShape(pattern) {
  return shape('large', pattern)
}

function smallShape(pattern) {
  return shape('small', pattern)
}

function shape(size, pattern) {
  let shape = emptyShape(size)
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
      rowElement.appendChild(cellElement(`occupied ${size}-cell`))
    } else {
      rowElement.appendChild(cellElement(`empty ${size}-cell`))
    }
  })
  return rowElement
}

function emptyShape(size) {
  let shape = document.createElement('div')
  shape.setAttribute('class', `${size}-shape`)
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

function emptyShapeRow() {
  const row = document.createElement("div");
  row.setAttribute('class', 'shape-row')
  return row
}

