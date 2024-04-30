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

## Question 12
A. `student.name`<br/> 
B. `student['Grad Year']`<br/> 
C. `student.greeting()`<br/> 
D. `student['Favorite Teacher'].name`<br/> 
E. `student.courseLoad[0]`<br/> 

## Question 13
A. `32`: the `+` operator is used for concatenating strings and there for it converts the `2` into a string and concatenates `3` and `2` into `32`. <br/>
B. `1`: the `-` operator is an arithmetic operator and thus the `'3'` is converted into an integer and `3 - 2 = 1`. <br/>
C. `3`: because `3` is an integer, the `+` operator is treated as an arithmetic operation. Then the `null` is treated as a 0 as a result and thus `3 + 0 = 3`. <br/>
D. `3null`: because the `3` is a string, the `+` operator is treated as a concatenation operation. Then the `null` is treated as a string `'null'` as a result and thus `'3' + 'null' = '3null'`. <br/>
E. `4`: because one operand of the expression is an integer `3`, the `+` operator is treated as an arithmetic operation. Therefore, the `true` boolean is converted to its integer representation which is `1` and as a result `1 + 3 = 4`. <br/>
F. `0`: here the `+` operation is interpreted as an arithmetic operation and thus null and false are both converted to `0` and thus `0 + 0 = 0`. <br/>
G. `3undefined`: because the `'3'` is a string, the `+` operation is treated as a concatenation operation and thus `undefined` is then converted to a string, resulting in `'3' + 'undefined' = '3undefined'`. <br/>
H. `NaN`: the `-` operation is interpreted as an arithmetic operation and thus it tries to convert both `'3'` and `undefined` into integers. `'3'` is converted to `3` and `undefined` is converted to `NaN`. Therefore, `3 - NaN = NaN`. <br/>

## Question 14
A. `true`: the `'2'` string is converted to the integer 2 and therefore the comparison is evaluated to `2 > 1` which further evaluates to `true`. <br/>
B. `false`: since both operands are strings, the comparision evalates them lexicographically and because `'2'` is greater than `'1'`, the comparison evaluates to `false`. <br/>
C. `true`: the character `'2'` is converted from a string to an integer and thus `2 == 2` evaluates to `true`. <br/>
D. `false`: the `===` operation is a comparison that does not do any type conversions and therefore, because `2` and `'2'` are an integer and string respectively, the comparison evaluates to `false`. <br/>
E. `false`: the boolean `true` is converted to the integer `1` and thus the comparison `1 == 2` evaluates to `false`. <br/>
F. `true`: any non-zero number converted to a boolean is evaulated as `true`, therefore, since both operands are of the same type and evaulates to `true`, the entire comparison evaluates to `true`. <br/>

## Question 15
The difference between `==` and `===` is that `==` allows for type conversions between the operands while `===` does not.

## Question 17
The result will be `[2,4,6]`. The following is a trace of the function:
1. modify array is called with parameters `[1,2,3]` array and `doSomething` function.
2. a `newArr` array is created to store the results
3. the for loop iterates through the array parameter `[1,2,3]` and for each element, it takes that element and applies the `callback` function on it (which in this case is the `doSomething` function which muliplies the input by 2).
4. In this case, this means that each element of `[1,2,3]` is muliplied by 2.
5. Then each result of applying the `doSomething` function to an element is pushed to `newArr` resulting in `newArr` being `[2,4,6]`.

## Question 19
The output of the code is `1`,`4`,`3`, then `2`. This is because `console.log(1)` and `console.log(4)` run instantly first because they were not called with `setTimeout`, `console.log(3)` then runs after as its it was called with `setTimeout` with a delay of 0 miliseconds. Finally after 1000 miliseconds pass, `console.log(2)` is called as it was called with `setTimeout` with a delay of 1000 miliseconds.
