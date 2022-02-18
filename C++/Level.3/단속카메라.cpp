#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool is_intersect(vector<int> &a, vector<int> &b) {
    return a[1] >= b[0];
}

int solution(vector<vector<int>> routes) {
    int answer = 1;
    sort(routes.begin(), routes.end());
    for(int i = 0; i < routes.size() - 1; ++i) {
        if(is_intersect(routes[i], routes[i+1])) {
            if(routes[i+1][1] > routes[i][1]) {
                routes[i+1][1] = routes[i][1];   
            }
        }
        else {
            ++answer;
        }
    }
    return answer;
}