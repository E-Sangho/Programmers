#include <string>
#include <vector>
#include <unordered_map>
#include <algorithm>
#include <iostream>

using namespace std;

unordered_map<string, vector<string>> next_pos;
unordered_map<string, int> ticket_num;
int n;
string chosen_path = "a";

bool compare(vector<string> a, vector<string> b) {
    if (a[0] == b[0]) return a[1] < b[1];
    return a[0] < b[0];
}

void DFSUtil(string airport, int depth, string path) {
	if (depth == n) {
        if (path < chosen_path) {
            chosen_path = path;
            return;
        }
    }    
    for(auto next : next_pos[airport]) {
        string ticket = airport + next;
        if (ticket_num[ticket]) {
            --ticket_num[ticket];
           	DFSUtil(next, depth + 1, path + next); 
            ++ticket_num[ticket];
        }
    }
}

vector<string> DFS(vector<vector<string>> tickets) {
    sort(tickets.begin(), tickets.end(), compare);
	for(auto ticket : tickets) {
        next_pos[ticket[0]].push_back(ticket[1]);
        ++ticket_num[ticket[0] + ticket[1]];
    }
    n = tickets.size();
    DFSUtil("ICN", 0, "ICN");
    vector<string> answer;
    int path_len = chosen_path.length();
    for(int i = 0; i < path_len; i += 3) {
        answer.push_back(chosen_path.substr(i, 3));
    }
    return answer;
}

vector<string> solution(vector<vector<string>> tickets) {
    return DFS(tickets);
}