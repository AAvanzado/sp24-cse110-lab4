## Question 1
At line 12 `3` will be printed to the console because after the for loop as finished executing, the variable `i` will have a value of 3. Line 12 still has access to the `i` variable because `i` was declared with the `var` keyword and thus its scope is the entire function.

## Question 2
At line 13 `150` will be printed because, at the end of the for loop, the `discountedPrice` variable is assigned `prices[3] * (1 - 0.5)` which is `300 * 0.5` which is equal to `150`. Again, at line 13, we have access to the `discountedPrice` variable because it was declared with the `var` keyword.

## Question 3
At line 14 `150` will be printed because, at the end of the for loop, the `finalPrice` variable is assigned `Math.round(150 * 100) / 100` which is `150`. Again, at line 14, we have access to the `finalPrice` variable because it was declared with the `var` keyword.

## Question 4
This funtion will return a new list with elements `[50, 100, 150]` . This is because for each price in the `prices` list (`[100, 200, 300]`), the `discount`, (`0.5`) is applied to it and then pushed to the `discounted` list. After the loop's complete execution, the new `discounted` list `[50, 100, 150]` is then returned.

## Question 5
Line 12 causes an error because it is trying to access variable `i` which was declared with the `let` keyword inside the for loop and is thus outside of the scope of line 12 which is outside of the for loop.

## Question 6
Line 13 causes an error because it is trying to access variable `discountedPrice` which was declared with the `let` keyword inside the for loop and is thus outside of the scope of line 13 which is outside of the for loop.

## Question 7
At line 14 `150` will be printed because of the same reasoning as question 3 (in terms of value). As for the scope of the variable `finalPrice`, while it was declared with the `let` keyword, line 14 is still in the same block as where it was declared, and thus it still as access to the `finalPrice` variable.

## Question 8
Dispite the change of all `var` keywords to `let`, the functionality of the function remains the same and thus similar to question 4, the function returns the list `[50, 100, 150]` which is the `prices` list with the `discount` applied to all the elements.

## Question 9
Line 11 causes an error because it is trying to access the `i` variable which was declared with the `let` keyword inside the for loop and line 11 is outside of the for loop. 

## Question 10
Line 12 prints `3` as it prints the `length` variable which, upon declaration, is assigned the length of the `prices` parameter. Line 12 is in the same scope as the `const length` variable and thus there are no conflicts.  

## Question 11
The function will return the list `[50, 100, 150]` because similar to the earlier iterations of the functions, for each element of the `prices` parameter (`[100, 200, 300]`), the `discount` (`0.5`) is applied and then pushed to a new list that is returned at the end of the function.

