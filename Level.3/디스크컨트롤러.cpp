#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

/*
 * 실제 시작 시간 = s_time
 * a 시작시간 = a_start, a 끝시간 a_end
 * b 시작시간 = b_start, b 끝시간 b_end
 * 이때, a_start, b_start <= s_time이다. 왜냐하면 s_time보다 시작시간이 크면 작업을 시작할 수 없다.
 * 
 * # 1. a 먼저 하는 경우
 * a_first_time = (s_time-a_start) + (a_end - a_start) + (s_time + a_end -b_start) + (b_end - b_start)
 *              = 2*s_time + 2*(-a_start) + 2*a_end + 2*(-b_start) + b_end
 * # 2. b 먼저 하는 경우
 * b_first_time = (s_time-b_start) + (b_end - b_start) + (s_time + b_end -a_start) + (a_end - a_start)
 *              = 2*s_time + 2*(-b_start) + 2*b_end + 2*(-a_start) + a_end
             
 * b_first_time > a_first_time  --> a가 먼저 실행되어야 한다.
 * a_first_time > b_first_time  --> b가 먼저 실행되어야 한다.

 * b_first_time - a_first_time = 2*s_time + 2*(-b_start) + 2*b_end + 2*(-a_start) + a_end
 *                             - 2*s_time + 2*(-a_start) + 2*a_end + 2*(-b_start) + b_end
 *                             = b_end - a_end
                            
 * 그러므로 위의 조건은 아래와 같이 표현 가능하다.
 * b_end > a_end  --> a가 먼저 실행되어야 한다.
 * a_end > b_end  --> b가 먼저 실행되어야 한다.
 * 
 */

bool compare(vector<int> a, vector<int> b) {
    int a_start = a[0], a_end = a[1], b_start = b[0], b_end = b[1];
    return a_start + a_end < b_start + b_end ;
}

int solution(vector<vector<int>> jobs) {
    int answer = 0;
    int p_time = 0;
    sort(jobs.begin(), jobs.end(), compare);
    for(int i = 0; i < jobs.size(); ++i) {
        if(p_time >= jobs[i][0]) {
            answer += jobs[i][1] + p_time - jobs[i][0];
            p_time += jobs[i][1] ;
            cout << answer << " " << p_time << endl;
        }
        else {
            answer += jobs[i][1];
            p_time += jobs[i][0] - p_time +jobs[i][1];
            cout << answer << " " << p_time << endl;
        }
    }
    answer /= jobs.size();
    return answer;
}

int main() {
    vector<vector<int>> jobs = {{0, 3}, {1, 9}, {2, 6}};
    solution(jobs);
}