#include <string>
#include <vector>

using namespace std;

int N;
int cnt;
vector<int> visited;
vector<vector<int>> network;

void DFSUtil(int index) {
    if (visited[index]) {
        return;
    }
    visited[index] = 1;
    for (int i = 0; i < N; ++i) {
        if (network[index][i] == 1) {
            DFSUtil(i);
        }
    }
}

int DFS(int n, vector<vector<int>> computers) {
    N = n;
	cnt = 0;
    network = computers;
    visited.assign(N, 0);
    
    for (int i = 0; i < N; ++i) {
        if (!visited[i]) {
            ++cnt;
            DFSUtil(i);
        }
    }
    return cnt;
}

int solution(int n, vector<vector<int>> computers) {
    return DFS(n, computers);
}