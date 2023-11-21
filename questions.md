## Multiple Choice Questions

### Problem #1
```
let course = 'Bootcamp';

function updateCourse(){
    course = 'Precourse';
    return course;
}

updateCourse();
console.log(course);
```

What will be be the value of `course` when it is logged?
```
Your answer here.
```
Precourse;

Explain why that will be the value.
```
Your answer here.
```
The variable course is declared using the keyword let 
which allows the variable to be reassigned.
The console prints Precourse because it was reassigned 
inside of the updatedCourse function.
After reassigning and giving course the value 'Precourse'
invoking the function then results in the updated value.


### Problem #2
```
let course = 'Bootcamp';

function updateCourse(){
    let course = 'Precourse';
    return course;
}

updateCourse();
console.log(course);
```

What will be be the value of `course` when it is logged?
```
Your answer here.
```
Bootcamp;

Explain why that will be the value.
```
Your answer here.
```
The variable course is first declared using the keyword let 
outside the function code block and is giving the value
'Bootcamp' this is a global scope (meaning I can reach it from anyway.)
The console prints Bootcamp because 
the inner scope variable don't affect the global varible.
Which allows the outter variable and value to be executed
once the function is called.


### Problem #3
```
const course = 'Bootcamp';

function updateCourse(){
    course = 'Precourse';
    return course;
}

updateCourse();
console.log(course);
```

What will be the result of running this code?
```
Your answer here.
```
the console throws a error

Explain why.
```
Your answer here.
Declaring a variable using the key word const 
can not be reassigned. This causes the variable 
value not to change. Trying to reassign a value 
should give a syntax error.

```

### Problem #4
```
const course = 'Bootcamp';

if (course === 'Bootcamp'){
    const orientationDate = "December 1, 2023"
}

console.log(orientationDate);
```

What will be the result of running this code?
```
Your answer here.
```
Error, I believe a ReferenceError 

Explain why.
```
Your answer here.
```
I think it would give an error because the code 
is trying to log `orientationDate` which is declared inside 
the if code block. Variables declared with the keyword const
are blocked scoped, they are only be accessed within the block 
where it was defined.

