//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (array,level) => {
  let multiplesList = new Set();
  for (let i = 0; i <array.length; i++){
    if(array[i]!== 0){
    for (let n = 1; n*array[i] < level; n++){
        multiplesList.add(n*array[i])
      }
    }}
  const Sum = Array.from(multiplesList).reduce((a, b) => a + b, 0);
  return Sum
};
