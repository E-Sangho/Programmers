#include <string>
#include <vector>
#include <queue>
#include <unordered_map>

using namespace std;

string s_word;
string t_word;
int n;
vector<string> lists;
unordered_map<string, bool> visited;

bool areTheyDifferOne(string &a, string &b) {
	int string_len = a.length();
    int cnt = 0;
    for(int i = 0; i < string_len; ++i) {
        if (a[i] != b[i]) {
            ++cnt;
        }
    }
    if (cnt != 1) {
        return false;
    }
    return true;
}

int BFSUtil(string s_word) {
	queue<pair<string, int>> q;
    q.push({s_word, 0});
    while (!q.empty()) {
      	pair<string, int> tmp = q.front();
        if (tmp.first == t_word) {
            return tmp.second;
        }
        visited[tmp.first] = 1;
        q.pop();
        for(int i = 0; i < n; ++i) {
            if (
                !visited[lists[i]] &&
                areTheyDifferOne(lists[i], tmp.first) 
               ) {
                q.push({lists[i], tmp.second + 1});
            }
        } 
    }
    return 0;
}

int BFS(string begin, string target, vector<string> words) {
   	s_word = begin;
    t_word = target;
    lists = words;
    n = words.size();
    return BFSUtil(begin);
}

int solution(string begin, string target, vector<string> words) {
	return BFS(begin, target, words);
}