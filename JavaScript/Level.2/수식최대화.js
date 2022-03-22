function calc(x, y, oper) {
  if (oper === "+") return String(Number(x) + Number(y));
  else if (oper === "-") return String(Number(x) - Number(y));
  else return String(Number(x) * Number(y));
}

function solution(expression) {
  var answer = 0;
  let number = expression.split(/\D/);
  let operator = expression.split(/\d+/).slice(1, -1);
  let combinations = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];
  combinations.forEach((combination) => {
    let temp_number = number.slice(),
      temp_operator = operator.slice();
    for (let op of combination) {
      while (temp_operator.includes(op)) {
        let index = temp_operator.findIndex((e) => e === op);
        temp_number[index] = calc(
          temp_number[index],
          temp_number[index + 1],
          op
        );
        temp_number.splice(index + 1, 1);
        temp_operator.splice(index, 1);
      }
    }
    answer = Math.max(answer, Math.abs(temp_number[0]));
  });
  return answer;
}
