#include <string>
#include <vector>

using namespace std;

#define INF 50000000;

int dist[200][200];

void floyd(int n) {
    for(int k = 0; k < n; ++k) {
        for(int i = 0; i < n; ++i) {
            for(int j = 0; j < n; ++j) {
                if(dist[i][j] > dist[i][k] + dist[k][j])
                    dist[i][j] = dist[i][k] + dist[k][j];
            }
        }
    }
}
int solution(int n, int s, int a, int b, vector<vector<int>> fares) {
    for(int i = 0; i < n; ++i) {
        for(int j = 0; j < n; ++j) {
            if(i == j)
                dist[i][j] = 0;
            else
                dist[i][j] = INF;
        }
    }
    
    for(auto edge: fares) {
        dist[edge[0]-1][edge[1]-1] = edge[2];
        dist[edge[1]-1][edge[0]-1] = edge[2];
    }
    
    floyd(n);
    
    --s;
    --a;
    --b;
    
    int answer = INF;
    for(int k = 0; k < n; ++k) {
        answer = min(answer, dist[s][k] + dist[k][a] + dist[k][b]);
    }
    
    return answer;
}
/* 
[dijkstra algorithm]

#include <string>
#include <vector>
#include <queue>
#include <algorithm>
#define INF 100000000

using namespace std;

void dijkstra(int dist[], int point, vector<vector<int>> &edge, int n) {
    priority_queue<pair<int, int>> pq;
    pq.push({0, point});
    dist[point] = 0;
    
    while(!pq.empty()) {
        int vertex = pq.top().second;
        pq.pop();
        for(int i = 1; i <= n; ++i) {
            if(edge[vertex][i] == INF)
                continue;
            
            if(dist[i] > edge[vertex][i] + dist[vertex]) {
                dist[i] = edge[vertex][i] + dist[vertex];
                pq.push({-dist[i], i});
            }
        }
    }
}

int solution(int n, int s, int a, int b, vector<vector<int>> fares) {
    int answer = INF;
    vector<vector<int>> edge(n+1, vector<int>(n+1, INF));
    int start[n+1], A[n+1], B[n+1];
    
    for(int i = 0; i < fares.size(); ++i) {
        edge[fares[i][0]][fares[i][1]] = fares[i][2];
        edge[fares[i][1]][fares[i][0]] = fares[i][2];
    }
    
    fill(start, start + n + 1, INF);
    fill(A, A + n + 1, INF);
    fill(B, B + n + 1, INF);
    
    dijkstra(start, s, edge, n);
    dijkstra(A, a, edge, n);
    dijkstra(B, b, edge, n);
    
    for(int i = 1; i < n+1; ++i) {
        if(answer > start[i] + A[i] + B[i]) {
            answer = start[i] + A[i] + B[i];
        }
    }
    return answer;
}
*/