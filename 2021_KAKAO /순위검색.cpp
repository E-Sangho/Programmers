#include <string>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

void erase_and(string &s) {
    while(s.find(" and ") != string::npos) {
        s.replace(s.find(" and "), 5, " ");
    }
}

vector<string> split(string &s) {
    int prsnt = 0;
    int prvs = 0;
    vector<string> v;
    v.clear();
    
    prsnt = s.find(" ");
    while(prsnt != string::npos) {
        v.push_back(s.substr(prvs, prsnt - prvs));
        prvs = prsnt + 1;
        prsnt = s.find(" ", prvs);
    }
    v.push_back(s.substr(prvs, prsnt - prvs));
    return v;
}

vector<int> solution(vector<string> info, vector<string> query) {
    vector<int> answer;
    vector<vector<string>> m_query;
    unordered_map<string, int> index;
    index["-"] = 0;
    index["cpp"] = 1;
    index["java"] = 2;
    index["python"] = 3;
    index["backend"] = 1;
    index["frontend"] = 2;
    index["junior"] = 1;
    index["senior"] = 2;
    index["chicken"] = 1;
    index["pizza"] = 2;
    vector<int> v_info[4][3][3][3];
    
    for(int i = 0; i < info.size(); ++i) {
        vector<string> v = split(info[i]);
                                                    
        for(int a = 0; a < (1 << 4); ++a) {
            int idx[4] = {0};
            for(int b = 0; b < 4; ++b) {
                if(a & (1 << b)) {
                    idx[b] = index[v[b]];
                }
            }
            v_info[idx[0]][idx[1]][idx[2]][idx[3]].push_back(stoi(v[4]));
        }
    }
                                                    
    for(int a = 0; a < 4; ++a) {
        for(int b = 0; b < 3; ++b) {
            for(int c = 0; c < 3; ++c) {
                for(int d = 0; d < 3; ++d) {
                    sort(v_info[a][b][c][d].begin(), v_info[a][b][c][d].end());
                }
            }
        }
    }
                                        
    for(int i = 0; i < query.size(); ++i) {
        erase_and(query[i]);
        m_query.push_back(split(query[i]));
    }
    
    for(int i = 0; i < m_query.size(); ++i) {
        int score = stoi(m_query[i][4]);
        vector<int> v_target = v_info[index[m_query[i][0]]][index[m_query[i][1]]][index[m_query[i][2]]][index[m_query[i][3]]];
        vector<int>::iterator iter = lower_bound(v_target.begin(), v_target.end(), score);
        answer.push_back(v_target.end() - iter);
    }
    
    return answer;
}