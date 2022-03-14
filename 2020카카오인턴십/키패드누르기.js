function solution(numbers, hand) {
    var answer = "";
    let leftHand = [3, 0],
        rightHand = [3, 2];
    numbers.forEach((number) => {
        if (number === 0 || number % 3 === 2) {
            let row, column;
            if (number === 0) {
                (row = 3), (column = 1);
            } else {
                row = Math.floor((number - 1) / 3);
                column = (number - 1) % 3;
            }
            let leftDist =
                    Math.abs(leftHand[0] - row) +
                    Math.abs(leftHand[1] - column),
                rightDist =
                    Math.abs(rightHand[0] - row) +
                    Math.abs(rightHand[1] - column);
            if (leftDist === rightDist) {
                if (hand == "right") {
                    rightHand = [row, column];
                    answer += "R";
                } else {
                    leftHand = [row, column];
                    answer += "L";
                }
            }

            if (leftDist < rightDist) {
                leftHand = [row, column];
                answer += "L";
            }

            if (rightDist < leftDist) {
                rightHand = [row, column];
                answer += "R";
            }
        } else if (number % 3 === 1) {
            answer += "L";
            leftHand = [Math.floor((number - 1) / 3), 0];
        } else if (number % 3 === 0) {
            answer += "R";
            rightHand = [Math.floor((number - 1) / 3), 2];
        }
    });
    return answer;
}
