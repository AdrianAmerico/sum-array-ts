const numberList = [3, 5, -4, 8, 11, 1, -1, 6, 1, 2, 3, 4, 5, 6];

export const sumArray = (arr: number[], targetSum: number): string[] => {
  let result: string[] = [];
  let secondaryValue = 0;
  const operators = ["+", "-", "*", "/"];
  const ordedArr = arr.sort((a, b) => a - b);

  while (ordedArr.length > secondaryValue) {
    for (let i = 0; i < ordedArr.length; i++) {
      operators.forEach((operator) => {
        if (
          Number(
            eval(`${ordedArr[i]} ${operator} ${ordedArr[secondaryValue]}`)
          ) === targetSum
        ) {
          const resultString: string = `${
            String(ordedArr[i]).length < 2
              ? "0" + String(ordedArr[i])
              : String(ordedArr[i])
          } ${operator} ${
            String(ordedArr[secondaryValue]).length < 2
              ? "0" + ordedArr[secondaryValue]
              : arr[secondaryValue]
          }`;

          console.log(
            resultString,
            "=",
            eval(`${arr[i]} ${operator} ${arr[secondaryValue]} \n`)
          );
          result.push(resultString);
        }
      });
    }
    secondaryValue++;
  }
  console.log(result);
  return result;
};
sumArray(numberList, 10);

export default sumArray;
