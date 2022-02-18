#include <string>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

/*
 * 실제 시작 시간 = s_time
 * a 시작시간 = a_start, a 소모시간 a_spend
 * b 시작시간 = b_start, b 소모시간 b_spend
 * 이때, a_start, b_start <= s_time이다. 왜냐하면 s_time보다 시작시간이 크면 작업을 시작할 수 없다.
 * 
 * # 1. a 먼저 하는 경우
 * a_first_time = (s_time-a_start) + a_spend + (s_time + a_spend - b_start) + b_spend
 *              = 2*s_time + (-a_start) + 2*a_spend + (-b_start) + b_spend
 * # 2. b 먼저 하는 경우
 * b_first_time = (s_time-b_start) + b_spend + (s_time + b_spend - a_start) + a_spend
 *              = 2*s_time + (-b_start) + 2*b_spend + (-a_start) + a_spend
             
 * b_first_time > a_first_time  --> a가 먼저 실행되어야 한다.
 * a_first_time > b_first_time  --> b가 먼저 실행되어야 한다.

 * b_first_time - a_first_time = 2*s_time + 2*(-b_start) + 2*b_end + 2*(-a_start) + a_end
 *                             - 2*s_time + 2*(-a_start) + 2*a_end + 2*(-b_start) + b_end
 *                             = b_spend - a_spend
                            
 * 그러므로 위의 조건은 아래와 같이 표현 가능하다.
 * b_end > a_end  --> a가 먼저 실행되어야 한다.
 * a_end > b_end  --> b가 먼저 실행되어야 한다.
 * 
 */

int solution(vector<vector<int>> jobs) {
    int answer = 0;
    int p_time = 0;
    int i = 0;
    priority_queue<pair<int, int>> pq;
    sort(jobs.begin(), jobs.end());
    while(i < jobs.size() || !pq.empty()) {
        if(i < jobs.size() && p_time >= jobs[i][0]) {
            pq.push({-jobs[i][1], -jobs[i][0]});
            ++i;
            continue;
        }
        if(!pq.empty()) {
            pair<int, int> present = pq.top();
            pq.pop();
            p_time = p_time - present.first;
            answer = answer + p_time + present.second;
        }
        else {
            p_time = jobs[i][0];
        }
    }
    answer /= jobs.size();
    return answer;
}