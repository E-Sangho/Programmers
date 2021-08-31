#include <string>
#include <vector>
#include <queue>

using namespace std;

int solution(vector<int> scoville, int K) {
    int answer = 0;
    priority_queue<int, vector<int>, greater<int>> pq;
    for(int i = 0; i < scoville.size(); ++i) {
        pq.push(scoville[i]);
    }
    while(pq.size() != 1 && pq.top() < K) {
        int first = pq.top();
        pq.pop();
        int second = pq.top();
        pq.pop();
        int new_food = first + second * 2;
        pq.push(new_food);
        ++answer;
    }
    if(pq.size() == 1 && pq.top() < K) answer = -1;
    return answer;
}