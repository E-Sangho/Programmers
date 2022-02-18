#include <string>
#include <vector>
#include <queue>
using namespace std;

struct cmp{
    bool operator() (int a, int b) {
        return a > b;
    }
};

vector<int> solution(vector<string> operations) {
    vector<int> answer;
    priority_queue<int, vector<int>, cmp> pq_min;
    priority_queue<int> pq_max;
    int cnt = 0;
    for(auto op : operations) {
        if(op[0] == 'I') {
            pq_min.push(stoi(op.substr(2)));
            pq_max.push(stoi(op.substr(2)));
            ++cnt;
        }
        else {
            if(cnt == 0) continue;
            if(op[2] == '1') {
                pq_max.pop();
                --cnt;
            }
            if(op[2] == '-') {
                pq_min.pop();
                --cnt;
            }
        }
        if(cnt == 0) {
            while(!pq_min.empty()) pq_min.pop();
            while(!pq_max.empty()) pq_max.pop();
        }
    }
    if(cnt == 0) {
        answer.push_back(0);
        answer.push_back(0);
    }
    else {
        answer.push_back(pq_max.top());
        answer.push_back(pq_min.top());
    }
    return answer;
}