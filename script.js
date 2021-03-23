let a = 0
let b = 0
let h = 0
let answer = 0
/* These variables above represent the variables in our equation. */ 
document.getElementById('calculate').addEventListener('click', find)
/* Once the user inserts the values into the input boxes, they will click the Calculate button. Then, the functions for this button will occur below. */ 
function find () {
  a = document.getElementById('base-a').value
  a = parseInt(a)
  b = document.getElementById('base-b').value
  b = parseInt(b)
  h = document.getElementById('height').value
  h = parseInt(h)
  /* ParInt tells the program that whatever is inserted into the input boxes is a integer and not a symbol. */
  answer = (a + b) * h / 2
  /* This is the equation that will calculate the area of the trapezoid. */
  /* The lines of code above show the process that the computeris following to calculate the area using the variables. */
  alert(answer)
}
