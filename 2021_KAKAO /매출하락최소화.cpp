#include <string>
#include <vector>
#include <queue>
#define MAX_SIZE 300000
#define INF 987654321
using namespace std;

vector<vector<int>> group(MAX_SIZE);
int costs[MAX_SIZE][2];
vector<int> Sales;

void dfs(int node) {
    costs[node][0] = 0;
    costs[node][1] = Sales[node];
    if(group[node].empty()) return;
    
    int extraCost = INF;
    for(auto ele : group[node]) {
        dfs(ele);
        if(costs[ele][0] < costs[ele][1]) {
            costs[node][0] += costs[ele][0];
            costs[node][1] += costs[ele][0];
            extraCost = min(extraCost, costs[ele][1] - costs[ele][0]);
        }
        else {
            costs[node][0] += costs[ele][1];
            costs[node][1] += costs[ele][1];
            extraCost = 0;
        }
    }
    costs[node][0] += extraCost;
}

int solution(vector<int> sales, vector<vector<int>> links) {
    Sales = sales;
    
    for(auto link : links) {
        group[link[0]-1].push_back(link[1]-1);
    }
    dfs(0);
    
    return min(costs[0][0], costs[0][1]);
}