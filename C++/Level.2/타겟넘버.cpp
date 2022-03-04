#include <string>
#include <vector>

using namespace std;

int n;
int cnt;

void DFSUtil(int depth, int sum, vector<int> numbers, int target) {
    if (depth == n) {
        if (sum == target) {
            ++cnt; 
        }
        return; 
    }
    DFSUtil(depth + 1, sum + numbers[depth], numbers, target);
    DFSUtil(depth + 1, sum - numbers[depth], numbers, target);
}

void DFS(vector<int> numbers, int target) {
    n = numbers.size();
    cnt = 0;
    DFSUtil(0, 0, numbers, target);
}

int solution(vector<int> numbers, int target) {
    DFS(numbers, target);
    return cnt;
}