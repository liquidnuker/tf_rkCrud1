// reducer helpers
// ======================================================/
function updateObject(oldObject, newValues) {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating
  return Object.assign({}, oldObject, newValues);
}

function updateItemInArray(array, itemId, updateItemCallback) {
  const updatedItems = array.map((i) => {
    if (i.id !== itemId) {
      // Since we only want to update one item, preserve all others as they are now
      return i;
    }

    // Use the provided callback to create an updated item
    const updatedItem = updateItemCallback(i);
    return updatedItem;
  });

  // return all items with the updated item
  return updatedItems;
}

// reducer functions
// ======================================================/
const rF1= () => {
  return "rF1";
};

// main reducer
// ======================================================/
export const appReducer = (state = "initialState", action) => {
  switch (action.type) {
  
  case "R1":
    return rF1();

  default:
    return state;
  }
}

// export {appReducer};