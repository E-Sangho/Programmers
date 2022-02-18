#include <string>
#include <vector>
#include <algorithm>
#include <set>

using namespace std;

bool compare(vector<int> &a, vector<int> &b) {
    return a[2] < b[2];
}

int findParent(vector<int> &parent, int x) {
    if(x == parent[x]) return x;
    else {
        return parent[x] = findParent(parent, parent[x]);
    }
}

void unionParent(vector<int> &parent, int a, int b) {
    a = findParent(parent, a);
    b = findParent(parent, b);
    if(a < b) parent[b] = a;
    else parent[a] = b;
}

bool isCycle(vector<int> &parent, int a, int b) {
    a = findParent(parent, a);
    b = findParent(parent, b);
    if(a == b) return true;
    else return false;
}

int solution(int n, vector<vector<int>> costs) {
    int answer = 0;
    vector<int> parent(n, 0);
    for(int i = 0; i < n; ++i) {
        parent[i] = i;
    }
    sort(costs.begin(), costs.end(), compare);
    for(int i = 0; i < costs.size(); ++i) {
        if(!isCycle(parent, costs[i][0], costs[i][1])) {
            unionParent(parent, costs[i][0], costs[i][1]);
            answer += costs[i][2];
        }
    }
    
    return answer;
}