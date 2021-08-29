#include <string>
#include <vector>

using namespace std;

int ans = 100;
bool visited[51];

bool string_differ(string &s1, string &s2) {
    int cnt = 0, s_len = s1.length();
    for(int i = 0; i < s_len; ++i) {
        if(s1[i] != s2[i]) ++cnt;
    }
    if(cnt == 1) return true;
    else return false;
}

void DFS(int height, string begin, string target, vector<string> words) {
    if(begin == target) {
        ans = min(ans, height);
        return;
    }
    if(height == words.size()) return;
    
    for(int i = 0; i < words.size(); ++i) {
        if(string_differ(begin, words[i]) && !visited[i] && height < ans) {
            visited[i] = true;
            DFS(height + 1, words[i], target, words);
            visited[i] = false;
        }
    }
}

int solution(string begin, string target, vector<string> words) {
    int n = words.size();
    DFS(0, begin, target, words);
    if(ans == 100) return 0;
    else return ans;
}