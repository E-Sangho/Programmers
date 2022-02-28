function solution(bridge_length, weight, truck_weights) {
    let c_weight = truck_weights[0];
    let index = 1;
    let time = 2;
    let crossing = [
        {
            weight: truck_weights[0],
            crossTime: 1 + bridge_length,
        },
    ];
    while (crossing.length > 0) {
        if (crossing[0].crossTime === time) {
            c_weight -= crossing[0].weight;
            crossing.shift();
        }

        if (c_weight + truck_weights[index] <= weight) {
            crossing.push({
                weight: truck_weights[index],
                crossTime: time + bridge_length,
            });
            c_weight += truck_weights[index];
            ++index;
            ++time;
        } else {
            if (crossing.length > 0) {
                time = crossing[0].crossTime;
            }
        }
    }
    return time;
}
