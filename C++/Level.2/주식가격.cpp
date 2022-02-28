#include <string>
#include <vector>
#include <stack>

using namespace std;

vector<int> solution(vector<int> prices) {
    
    /*
    	쉽게 떠올리는 방식은 이중 for문을 사용해서 O(n^2)으로 푸는 것이다.
        하지만 이중 for문은 비효율적이기 때문에, 테스트 케이스가 빡빡하면 풀 수 없는 경우가 생긴다.
        그러므로 다른 아이디어를 사용해서 O(n)이나 O(nlogn)으로 낮춰야 한다.
        
        잠시 사람이 문제를 푸는 경우를 살펴보자.
        사람이 직접 한다면 하나하나 세어가며 하지 않는다.
        수를 보다가 값이 작아지는 시점에서 값을 정하고, 뒤로 거슬러 올라가며 값을 구한다.
        그리고 현재 시점의 값보다 작은 것은 남겨두고 다음으로 넘어가서 하던 일을 반복한다.
        이 방식을 그대로 사용하면 문제를 풀 수 있다.

        스택에 index만을 저장하고, 이전보다 값이 작아지는 경우를 찾는다.
        그리고 값이 작아지면 index의 값과 현재 위치의 값을 비교한다.
        만약 prices[index]가 더 작다면 넘어가면 된다.
        반대로 값이 더 크다면 해당 index를 지워주고, answer[index]에 값을 계산해 넣는다.
        마지막으로 스택에 남아 있는 값을 계산해야 한다.
        끝까지 스택에 남았다는 의미는 prices 안의 모든 값보다 작은 경우 뿐이다.
        이 경우는 answer[index] = (n - 1) - index로 계산하면 된다.
     */   

    int n = prices.size();
    vector<int> answer(n);
    stack<int> s;

    for (int i = 0; i < n; ++i) {
        while (
            s.size() > 0 &&
            prices[i] < prices[s.top()]
        ) {
            answer[s.top()] = i - s.top();
            s.pop();
        }
        s.push(i);
    }

    while (s.size() > 0) {
        answer[s.top()] = (n -1) - s.top();
        s.pop();
    }

    return answer;
}
