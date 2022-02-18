#include <string>
#include <vector>

using namespace std;
int cnt = 0;
int sum = 0;

void DFS(vector<int> numbers, int target, int depth)
{
    if(depth == numbers.size()) {
        if(sum == target) {
            ++cnt;
        }
        return;
    }
    sum += numbers[depth];
    DFS(numbers, target, depth+1);
    sum -= 2 * numbers[depth];
    DFS(numbers, target, depth+1);
    sum += numbers[depth];
}

int solution(vector<int> numbers, int target) {
    int answer = 0;
    DFS(numbers, target, 0);
    answer = cnt;
    return answer;
}