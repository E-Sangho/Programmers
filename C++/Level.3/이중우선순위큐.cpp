#include <string>
#include <vector>
#include <queue>

using namespace std;

vector<int> solution(vector<string> operations) {
    vector<int> answer;
    priority_queue<int> pq_max;
    priority_queue<int, vector<int>, greater<int>> pq_min;
    int num = 0;
    int n = operations.size();
    for (int i = 0; i < n; ++i) {
        if (operations[i][0] == 'I') {
            int number = stoi(operations[i].substr(2));
         	pq_max.push(number);
            pq_min.push(number);
            ++num;
        } else if (operations[i][0] == 'D') {
            if(num != 0) {
                if (operations[i].substr(2) == "1") {
                    pq_max.pop(); 
                } else {
                    pq_min.pop();
                }
                --num;
            }
        	if (num == 0) {
                pq_max = priority_queue<int>();
                pq_min = priority_queue<int, vector<int>, greater<int>>();
            }
        }
    }
	if (num != 0) {
        answer.push_back(pq_max.top());
        answer.push_back(pq_min.top());
    } else {
        answer.push_back(0);
        answer.push_back(0);
    }
    return answer;
}