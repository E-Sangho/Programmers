#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> priorities, int location) {
    int answer = 0;
   	while (1) {
    	int priority = priorities.front();
        int n = priorities.size();
        int max = *max_element(priorities.begin(), priorities.end());
        if (max == priority) {
        	++answer;
            if (location == 0) break;
            priorities.erase(priorities.begin());
            --location;
        } else {
            priorities.push_back(priority);
            priorities.erase(priorities.begin());
            if (location == 0) {
                location = n - 1;
            } else {
                --location;
            } 
        }
    } 
    return answer;
}