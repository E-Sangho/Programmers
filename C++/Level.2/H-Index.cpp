#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> citations) {
    int answer = 0;
    int n = citations.size();
    int h;
    sort(citations.begin(), citations.end());
    // h <= n - i && citation[i] >= h
    for(int i = 0; i < n; ++i) {
        h = min(n - i, citations[i]);
        answer = max(answer, h);
    }
    return answer;
}