#include <string>
#include <vector>

using namespace std;

bool visited[200] = {0,};

void DFS(int root, vector<vector<int>> computers, int n) {
    if(!visited[root]) {
        visited[root] = true;
        for(int i = 0; i < n; ++i) {
            if(!visited[i] && computers[root][i]) {
                DFS(i, computers, n);   
            }
        }   
    }
}

int solution(int n, vector<vector<int>> computers) {
    int answer = 0;
    for(int i = 0; i < n; ++i) {
        if(!visited[i]) {
            DFS(i, computers, n);
            ++answer;
        }
    }
    return answer;
}