#include <string>
#include <vector>
#include <map>
using namespace std;

bool visited[7]={0,};
char num[7];
int M;
string temp = "";
map<int, int> mp;

bool is_prime(int p) {
    if(p < 2) return false;
    for(int i = 2; i * i <= p; ++i) {
        if(p % i == 0) return false;
    }
    return true;
}

void dfs(int height) {
    if(height == M) return;
    
    for(int i = 0; i < M; ++i) {
        if(!visited[i]) {
            visited[i] = true;
            temp += num[i];
            ++mp[stoi(temp)];
            dfs(height+1);
            temp = temp.substr(0, height);
            visited[i] = false;
        }
    }
}

int solution(string numbers) {
    int answer = 0;
    M = numbers.length();
    for(int i = 0; i < M; ++i) {
        num[i] = numbers[i];
    }
    dfs(0);
    map<int, int>::iterator iter;
    for(iter = mp.begin(); iter != mp.end(); ++iter) {
        if(is_prime(iter->first)) ++answer;
    }
    return answer;
}