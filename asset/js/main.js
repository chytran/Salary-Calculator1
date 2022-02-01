var hours = document.getElementById("hours");
var wage = document.getElementById("wage");
var days = document.getElementById("salaryDayAmount");
const form = document.getElementById("salary");
const results = document.getElementById("results");
const submit = document.getElementById("submit");
const asking = document.getElementById("asking");

// converting text to int
let realHours = parseInt(hours.value);
let realWage = parseInt(wage.value);
let realDays = parseInt(days.value);

//Matt's solution
// var realHours = parseInt(hours, 10);
// var realWage = parseInt(wage, 10);
// var realDays = parseInt(days, 10);

//const numb=213231221;



submit.addEventListener("click", (e) => {
    e.preventDefault();

    // let salaryResult = new Salary(wage, hours, days);
    // results.innerHTML = salaryResult.displayResults();
    
    console.log("This form is working");
    console.log(calculate(hours.value, wage.value));

    results.innerHTML = "$" + (separator(calculate(hours.value, wage.value) * 52)) + " annually";

    asking.textContent = '';
})

// Calculates wage annually
function calculate(hours, wage) {
    if(isNaN(hours) && isNaN(wage)){
        return false;
    } else {
        let result = hours * wage;
        return result;
    }
}

// Adds comma into the salary amount
function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     return str.join(".");
 }


 var x, i, j, l, ll, selElmnt, a, b, c;
 /* Look for any elements with the class "custom-select": */
 x = document.getElementsByClassName("custom-select");
 l = x.length;
 for (i = 0; i < l; i++) {
   selElmnt = x[i].getElementsByTagName("select")[0];
   ll = selElmnt.length;
   /* For each element, create a new DIV that will act as the selected item: */
   a = document.createElement("DIV");
   a.setAttribute("class", "select-selected");
   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
   x[i].appendChild(a);
   /* For each element, create a new DIV that will contain the option list: */
   b = document.createElement("DIV");
   b.setAttribute("class", "select-items select-hide");
   for (j = 1; j < ll; j++) {
     /* For each option in the original select element,
     create a new DIV that will act as an option item: */
     c = document.createElement("DIV");
     c.innerHTML = selElmnt.options[j].innerHTML;
     c.addEventListener("click", function(e) {
         /* When an item is clicked, update the original select box,
         and the selected item: */
         var y, i, k, s, h, sl, yl;
         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
         sl = s.length;
         h = this.parentNode.previousSibling;
         for (i = 0; i < sl; i++) {
           if (s.options[i].innerHTML == this.innerHTML) {
             s.selectedIndex = i;
             h.innerHTML = this.innerHTML;
             y = this.parentNode.getElementsByClassName("same-as-selected");
             yl = y.length;
             for (k = 0; k < yl; k++) {
               y[k].removeAttribute("class");
             }
             this.setAttribute("class", "same-as-selected");
             break;
           }
         }
         h.click();
     });
     b.appendChild(c);
   }
   x[i].appendChild(b);
   a.addEventListener("click", function(e) {
     /* When the select box is clicked, close any other select boxes,
     and open/close the current select box: */
     e.stopPropagation();
     closeAllSelect(this);
     this.nextSibling.classList.toggle("select-hide");
     this.classList.toggle("select-arrow-active");
   });
 }
 
 function closeAllSelect(elmnt) {
   /* A function that will close all select boxes in the document,
   except the current select box: */
   var x, y, i, xl, yl, arrNo = [];
   x = document.getElementsByClassName("select-items");
   y = document.getElementsByClassName("select-selected");
   xl = x.length;
   yl = y.length;
   for (i = 0; i < yl; i++) {
     if (elmnt == y[i]) {
       arrNo.push(i)
     } else {
       y[i].classList.remove("select-arrow-active");
     }
   }
   for (i = 0; i < xl; i++) {
     if (arrNo.indexOf(i)) {
       x[i].classList.add("select-hide");
     }
   }
 }