# Write chained if/else if statements to fulfill the following conditions:

1. num < 5 - return Tiny
2. num < 10 - return Small
3. num < 15 - return Medium
4. num < 20 - return Large
5. num >= 20 - return Huge

```Javascript
function testSize(num) {
  // Only change code below this line
  if( num < 5){
    return "Tiny";
  }
  else if( num < 10){
    return "Small";
  }
  else if( num < 15){
    return "Medium";
  }
  else if( num < 20){
    return "Large";
  }
  else if( num >= 20){
    return "Huge";
  }

  return "Change Me";
  // Only change code above this line
}

testSize(7);

```
