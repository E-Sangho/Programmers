#include <string>
#include <vector>
#include <queue>
#define INF 0x3f3f3f3f

using namespace std;

typedef pair<int, int> PI;

int solution(int n, vector<vector<int>> costs) {
    int answer = 0;
    priority_queue<PI, vector<PI>, greater<PI>> pq;
    vector<int> dist(n, INF);
    vector<bool> marked(n, false);
   	vector<vector<PI>> edges(n);
    
    for (auto cost : costs) {
		edges[cost[0]].push_back({cost[1], cost[2]});
        edges[cost[1]].push_back({cost[0], cost[2]});
    }
    
    pq.push({0, 0});
    dist[0] = 0;
    while (!pq.empty()) {
        int v = pq.top().second;
        int v_length = pq.top().first;
        pq.pop();
        if (marked[v]) {
            continue;
        }
        answer += v_length;
        marked[v] = true;
       	for (auto edge : edges[v]) {
            int w = edge.first;
           	int length = edge.second;
           	if (!marked[w] && dist[w] > length) {
                dist[w] = length;
                pq.push({length, w});
            } 
        } 
    }
   	return answer;
}