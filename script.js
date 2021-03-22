let a = 0
let b = 0
let h = 0
let answer = 0

document.getElementById('calculate').addEventListener('click', find)

function find () {
  a = document.getElementById('baseA').value
  a = parseInt(a)
  b = document.getElementById('baseB').value
  b = parseInt(b)
  h = document.getElementById('height').value
  h = parseInt(h)
  answer = (a + b) * h / 2
  alert(answer)
}
