#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int N;

bool compare(vector<string> s1, vector<string> s2) {
    if(s1[0] == s2[0]) return s1[1] < s2[1];
    else return s1[0] < s2[0];
}

void dfs(int height, string start, bool *visited, vector<vector<string>> tickets, vector<string> &answer) {
    if(height == N) {
        return;
    }
    
    for(int i = 0; i < N; ++i) {
        if(!visited[i] && tickets[i][0] == start) {
            visited[i] = true;
            string destination = tickets[i][1];
            answer.push_back(destination);
            dfs(height+1, destination, visited, tickets, answer);
            if(answer.size() == N + 1) return;
            answer.pop_back();
            visited[i] = false;
        }
    }
}

vector<string> solution(vector<vector<string>> tickets) {
    vector<string> answer;
    N = tickets.size();
    string start = "ICN";
    sort(tickets.begin(), tickets.end(), compare);    
    bool visited[N];
    fill(visited, visited + N, false);
    answer.push_back(start);
    dfs(0, start, visited, tickets, answer);
    return answer;
}