#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(int n, vector<int> lost, vector<int> reserve) {
    int answer = 0;
    int clothes[n+1];
    sort(lost.begin(), lost.end());
    sort(reserve.begin(), reserve.end());
    fill(clothes, clothes + n + 1, 1);
    
    for(int i : lost) {
        --clothes[i];
    }
    
    for(int i : reserve) {
        ++clothes[i];
    }
    
    for(int i = 1; i <= n; ++i) {
        if(clothes[i] > 1) {
            if(clothes[i-1] == 0) {
                --clothes[i];
                ++clothes[i-1];
                continue;
            }
            if(i != n && clothes[i+1] == 0) {
                --clothes[i];
                ++clothes[i+1];
                continue;
            }
        }
    }
    
    for(int i = 1; i <= n; ++i) {
        if(clothes[i] > 0) ++answer;
    }
    
    return answer;
}