
var stack = new stack();

let expression = "( )";
if (balance_check(expression)) {
  console.log("balanced");
} else {
  console.log("not balanced");
}

function balance_check(expression) {

// if (expression.length==0)
// return true;


for ( i = 0; i < expression.length; i++)
{
 let char  = expression[i];
 if (char == '{' || char == '(' || char == '[')
 {
     stack.push(char);
 }
 if (char == '}' || char == ')' || char == ']')
 {
     if (stack.length==0)
         return false;
     let last = stack.peek();
     if (char == '}' && last == '{' || char == ')' && last == '(' || char == ']' && last == '[')
         stack.pop();
     else 
         return false;
 }
}
return expression.length==0?true:false; 
}

