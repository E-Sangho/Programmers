//
//  K번째수.cpp
//  Programmers_Algorithm_Solutions
//
//  Created by 이상호 on 2021/06/04.
//
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> array, vector<vector<int>> commands) {
    vector<int> answer;
    
    for(auto row : commands){
        vector<int> copy;
        copy.assign(array.begin() + row[0] - 1, array.begin() + row[1]);
        sort(copy.begin(), copy.end());
        answer.push_back(copy[row[2] - 1]);
    }
    return answer;
}
