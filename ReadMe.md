# Problem 01

### Problem Statement

You are tasked with creating a function named `gradeCategory` for a grading system. This function takes a numeric grade as input and categorizes it into a specific category based on the following rules:

- If the grade is less than 0 or greater than 100, the function should return "Invalid Grade."

- If the grade is between 0 and 49 (inclusive), the function should return "Fail."

- If the grade is between 50 and 59 (inclusive), the function should return "Pass."

- If the grade is between 60 and 74 (inclusive), the function should return "Credit."

- If the grade is between 75 and 89 (inclusive), the function should return "Distinction."

- If the grade is between 90 and 100 (inclusive), the function should return "High Distinction."

Your `gradeCategory` function should accept a single parameter:
1. `grade`: an integer representing the student's grade.

The function should return the appropriate category as a string based on the rules mentioned above.

Here are some examples:

- `gradeCategory(45)` should return "Fail" because the grade is in the range [0, 49].

{Try It!}(node .guides/gradeCategory/try-it-01.js)

- `gradeCategory(55)` should return "Pass" because the grade is in the range [50, 59].

{Try It!}(node .guides/gradeCategory/try-it-02.js)


- `gradeCategory(70)` should return "Credit" because the grade is in the range [60, 74].

{Try It!}(node .guides/gradeCategory/try-it-03.js)

- `gradeCategory(85)` should return "Distinction" because the grade is in the range [75, 89].

{Try It!}(node .guides/gradeCategory/try-it-04.js)


**Constraints:**
- The input grade is an integer within the range [-1000, 1000].

### Solution

node .guides/secure/gradeCategoryTest.js

console.log(gradeCategory(-10)); // Expected output: "Invalid Grade"
console.log(gradeCategory(0)); // Expected output: "Fail"
console.log(gradeCategory(54)); // Expected output: "Pass"
console.log(gradeCategory(82)); // Expected output: "Distinction"
console.log(gradeCategory(100)); // Expected output: "High Distinction"

# Problme 02


### Problem

You are working on a simple calculator application, and you need to implement a function named `operationResult`. This function will take three parameters:

1. `num1`: an integer representing the first number.
2. `num2`: an integer representing the second number.
3. `operation`: a string representing the operation to be performed. It can take one of the following values: "add", "subtract", "multiply", or "divide".

Your `operationResult` function should perform the specified operation on `num1` and `num2` and return the result as an integer.

The operations are defined as follows:

- If `operation` is "add", return the sum of `num1` and `num2`.
- If `operation` is "subtract", return the result of subtracting `num2` from `num1`.
- If `operation` is "multiply", return the product of `num1` and `num2`.
- If `operation` is "divide", return the result of dividing `num1` by `num2`.

You can assume that the division operation will always result in a whole number.

Here are some examples:

- `operationResult(5, 3, "add")` should return `8` because it's the sum of 5 and 3.

{Try It!}(node .guides/operationResult/try-it-01.js)

- `operationResult(10, 4, "subtract")` should return `6` because it's the result of subtracting 4 from 10.

{Try It!}(node .guides/operationResult/try-it-02.js)

- `operationResult(7, 2, "multiply")` should return `14` because it's the product of 7 and 2.

{Try It!}(node .guides/operationResult/try-it-03.js)

- `operationResult(8, 4, "divide")` should return `2` because it's the result of dividing 8 by 4.

{Try It!}(node .guides/operationResult/try-it-04.js)

### Constraints

- The input `num1` and `num2` are integers within the range [-1000, 1000].
- The `operation` parameter will always be one of the four valid operation strings: "add", "subtract", "multiply", or "divide".

### Solution

node .guides/secure/operationResultTest.js

console.log(operationResult(5, 3, "add")); // Expected output: 8
console.log(operationResult(10, 4, "subtract")); // Expected output: 6
console.log(operationResult(7, 2, "multiply")); // Expected output: 14
console.log(operationResult(8, 4, "divide")); // Expected output: 2
console.log(operationResult(10, 5, "divide")); // Expected output: 2


# Problem 03

### Problem

You are a dog owner, and your furry friend, Buddy, has a peculiar behavior. Buddy tends to bark excessively when certain conditions are met. You want to create a function named `dogBark` to determine if Buddy is likely to bark based on the current situation.

The `dogBark` function should accept two parameters:

1. `alone`: a boolean value indicating if Buddy is left alone. `true` means Buddy is alone, `false` means someone is home.
2. `hour`: an integer value representing the current hour in a 24-hour format (0 to 23).

Buddy is likely to bark under the following conditions:

- If Buddy is left alone and the hour is between 20 to 23 (8 PM to 11 PM).
- If Buddy is left alone and the hour is between 0 to 5 (12 AM to 5 AM).

The function should return `true` if Buddy is likely to bark based on these conditions and `false` otherwise.

Here are some examples:

- `dogBark(true, 21)` should return `true` because Buddy is alone, and it's between 8 PM to 11 PM.

{Try It!}(node .guides/dogBark/try-it-01.js)

- `dogBark(true, 3)` should return `true` because Buddy is alone, and it's between 12 AM to 5 AM.

{Try It!}(node .guides/dogBark/try-it-02.js)

- `dogBark(false, 15)` should return `false` because Buddy is not alone, and the time is irrelevant.

{Try It!}(node .guides/dogBark/try-it-03.js)

### Constraints

- The input `hour` is an integer within the range [0, 23].
- The `alone` parameter is a boolean value (true or false).

### Solution 

node .guides/secure/dogBarkTest.js

console.log(dogBark(true, 3)); // Expected output: true
console.log(dogBark(false, 15)); // Expected output: false
console.log(dogBark(true, 23)); // Expected output: true
console.log(dogBark(true, 4)); // Expected output: true
