// Activity 4:Using Third-Party Modules

// Task 6:

import lodash from "lodash";

const str = "hello world";
const capitalStr = lodash.capitalize(str);

console.log(str);
console.log(capitalStr);

// Task 7:

import axios from "axios";

async function fetchData() {
  try {
    const response = await axios.get(
      "https://api.github.com/users/Abhishek120797"
    );
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log("Something went wrong Error: ", error);
  }
}
fetchData();

// Activity 5: Module  Bundling (Optional)

// Task 8
