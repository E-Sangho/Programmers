#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> citations) {
    sort(citations.begin(), citations.end());
    int n = citations.size();
    int h = 0;
    for (int i = 0; i < n; ++i) {
        h = max(h, min(n - i, citations[i]));
    }
    return h;
}