#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> answers) {
    vector<int> answer;
    vector<int> pattern2 = {2, 1, 2, 3, 2, 4, 2, 5};
    vector<int> pattern3 = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
    int n = answers.size();
    int supo1_cnt = 0;
    for(int i = 0; i < n; ++i)
    {
        if(answers[i] == (1 + i % 5)) {
            ++supo1_cnt;
        }
    }
    
    int supo2_cnt = 0;
    for(int i = 0; i < n; ++i)
    {
        if(answers[i] == pattern2[i % 8]) {
            ++supo2_cnt;
        }
    }
    
    int supo3_cnt = 0;
    for(int i = 0; i < n; ++i)
    {
        if(answers[i] == pattern3[i % 10]) {
            ++supo3_cnt;
        }   
    }
    if(supo1_cnt >= supo2_cnt && supo1_cnt >= supo3_cnt) answer.push_back(1);
    if(supo2_cnt >= supo1_cnt && supo2_cnt >= supo3_cnt) answer.push_back(2);
    if(supo3_cnt >= supo1_cnt && supo3_cnt >= supo2_cnt) answer.push_back(3);
    sort(answer.begin(), answer.end());
    return answer;
}