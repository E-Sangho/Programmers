function solution(record) {
    let answer = [];
    let ID2Name = new Map();
    record.forEach((e) => {
        let [order, userID, name] = e.split(" ");
        if (order === "Enter") {
            answer.push([userID, order]);
            ID2Name.set(userID, name);
        } else if (order === "Leave") {
            answer.push([userID, order]);
        } else {
            ID2Name.set(userID, name);
        }
    });
    return answer.map((e, i) => {
        let [userID, order] = e;
        let temp = ID2Name.get(userID);
        if (order === "Enter") {
            temp += "님이 들어왔습니다.";
        } else {
            temp += "님이 나갔습니다.";
        }
        return temp;
    });
}
