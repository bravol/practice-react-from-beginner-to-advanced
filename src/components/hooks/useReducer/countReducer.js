//it works same as useState hook but more advanced than useState
// it is used in complex projects/apps where you have many renders/ functions etc.

//dispatch - replaces setCount() and tells the reducer function what to do
//payload - sends some information to the reducer function

//reducer function it can have any name
export const countReducer = (state, action) => {
  //it must return state for it to work optimally or well
  switch (action.type) {
    case "SUBTRACT":
      return { count: state.count - 1 };

    case "ADD":
      return { count: state.count + 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state;
    //or throw new Error() some do that
  }
  //which method do you prefer a switch or an if statement. your choice

  //   if (action.type === "SUBTRACT") {
  //     return { count: state.count - 1 };
  //   }
  //   if (action.type === "ADD") {
  //     return { count: state.count + 1 };
  //   }
  //   if (action.type === "RESET") {
  //     return { count: 0 };
  //   }
  //   return state;
};
