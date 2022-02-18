#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> people, int limit) {
    int answer = 0;
    sort(people.begin(), people.end());
    int start = 0, end = people.size() - 1;
    while(start <= end) {
        int temp = people[end];
        while(start != end && temp + people[start] <= limit) {
            temp += people[start];
            ++start;
        }
        ++answer;
        --end;
    }
    return answer;
}