console.log("js module is running");

import karesi, {
  WHW,
  WORKING_HOURS_WEEK,
  dec,
  inc,
  sum,
  counter,
} from "./mymodules.js";
// import { default as karesi,
//   WHW,
//   WORKING_HOURS_WEEK,
//   dec,
//   inc,
//   sum,
//   counter,
// } from "./mymodules.js";

// console.log("W :>>", W);
// console.log("WORKING_HOURS_WEEK :>>", WORKING_HOURS_WEEK);
// console.log("karesi(4) :>>", karesi(4));

inc(4);
inc(6);
dec();
console.log("dec() :>>", dec());
inc();
console.log("counter:>>", counter);
// counter = 29; //! sabit gibi davranır
inc();
console.log("counter:>>", counter);
