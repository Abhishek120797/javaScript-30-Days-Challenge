// Day 13: Modules

// Activity 1: Creating and Exporting Modules

// Task 1:

import { sum } from "./task_1.mjs";

let result = sum(5, 6);
console.log(result);

// Task 2:

import { person } from "./tsak_2.mjs";

console.log(person);

// Activity 2: Named and Default Exports

// task 3:

import { fun1, fun2, fun3 } from "./task_3.mjs";

fun1();
fun2();
fun3();

// Task 4:

import defFun from "./task_4.mjs";

defFun();

// Activity 3: Importing Entire Modules

// Task 5:

import * as circle from "./task_5.mjs";

circle.area();
circle.curcomfarence();
