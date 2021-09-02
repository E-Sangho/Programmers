#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <set>

using namespace std;

bool compare(vector<int> &a, vector<int> &b) {
    return a[2] < b[2];
}

int solution(int n, vector<vector<int>> costs) {
    int answer = 0;
    set<int> cnnctd[n];
    sort(costs.begin(), costs.end(), compare);
    for(int i = 0; i < n; ++i) {
        int i1 = costs[i][0];
        int i2 = costs[i][1];
        if(cnnctd[i1].empty() ||
           cnnctd[i2].empty() ||
           cnnctd[i1].find(i2) == cnnctd[i1].end()
          )
        {
            for(auto iter = cnnctd[i1].begin(); iter != cnnctd[i1].end(); ++iter) {
                if(cnnctd[i2].find(*iter) == cnnctd[i2].end()) {
                    cnnctd[i2].insert(*iter);        
                }
            }
            for(auto iter = cnnctd[i2].begin(); iter != cnnctd[i2].end(); ++iter) {
                if(cnnctd[i1].find(*iter) == cnnctd[i1].end()) {
                    cnnctd[i1].insert(*iter);        
                }
            }
            if(cnnctd[i1].find(i2) == cnnctd[i1].end()) {
                cnnctd[i1].insert(i2);   
            }
            if(cnnctd[i2].find(i1) == cnnctd[i2].end()) {
                cnnctd[i2].insert(i1);   
            }
            answer += costs[i][2];
        }
        for(int i = 0; i < n; ++i) {
            cout << i << " is : ";
            for(auto iter = cnnctd[i].begin(); iter != cnnctd[i].end(); ++iter) {
                cout << *iter <<  " ";
            }
            cout << endl;
        }
    }
    return answer;
}

int main() {
    int n = 4;
    vector<vector<int>> costs = { {0, 1, 1}, {0, 2, 2}, {1, 2, 5}, {1, 3, 1}, {2, 3, 8}};
    solution(n, costs);
}