#include <string>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

void combination(string order, unordered_map<string, int> &uomap, vector<char> comb, int index, int depth)
{
    if(order.length() < order.size()) return;
    if(depth == comb.size()) {
        string s = "";
        for(int i = 0; i < comb.size(); ++i) {
            s += comb[i];
        }
        ++uomap[s];
        return;
    }
    
    for(int i = index; i < order.length(); ++i) {
        comb[depth] = order[i];
        combination(order, uomap, comb, i+1, depth+1);
    }

}

vector<string> solution(vector<string> orders, vector<int> course) {
    vector<string> answer;
    
    for(int i = 0; i < orders.size(); ++i) {
        sort(orders[i].begin(), orders[i].end());
    }
    
    for(int i = 0; i < course.size(); ++i) {
        unordered_map<string, int> uomap;
        for(int j = 0; j < orders.size(); ++j) {
            vector<char> comb(course[i]);
            combination(orders[j], uomap, comb, 0, 0);
        }
        
        int max = 0;
        for(auto iter = uomap.begin(); iter != uomap.end(); ++iter) {
            if(max < iter->second) max = iter->second;
        }
        for(auto iter = uomap.begin(); iter != uomap.end(); ++iter) {
            if(max == iter->second && max > 1) {
                answer.push_back(iter->first);
            }
        }   
    }
    sort(answer.begin(), answer.end());
    return answer;
}