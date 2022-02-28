#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> progresses, vector<int> speeds) {
    vector<int> answer;
    vector<int> TIMES;
    int n = progresses.size();
    
    for (int i = 0; i < n; ++i) {
        int remain = 100 - progresses[i];
        int day = remain / speeds[i] + (remain % speeds[i] != 0);
        TIMES.push_back(day);
    }
    
    for (int i = 0; i < n;) {
		int workDay = TIMES[i];
        int cnt = 0;
        while (i < n && TIMES[i] <= workDay) {
        	++cnt;
            ++i;
        }
        answer.push_back(cnt);
    }
    
    return answer;
}