#include <string>
#include <vector>
#include <map>

using namespace std;

int solution(vector<int> stones, int k) {
    multimap<int, int> mm;
    int n = stones.size();
    for (int i = 0; i < k; ++i) {
        mm.insert({stones[i], i});
    }
    int answer = (*--mm.end()).first;
    for (int i = k; i < n; ++i) {
        mm.erase(mm.find(stones[i-k]));
        mm.insert({stones[i], i});
        if (answer > (*--mm.end()).first) {
            answer = (*--mm.end()).first;
        }
    }
    return answer;
}