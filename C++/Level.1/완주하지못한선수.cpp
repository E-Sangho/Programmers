//
//  완주하지못한선수.cpp
//  Xcode_Programmers
//
//  Created by 이상호 on 2021/06/04.
//
#include <string>
#include <vector>
#include <unordered_map>

using namespace std;

string solution(vector<string> participant, vector<string> completion) {
    string answer = "";
    unordered_map<string, int> check;
    
    for(string name : participant){
        ++check[name];
    }
    
    for(string name : completion){
        --check[name];
    }
    
    for(auto pair : check){
        if(pair.second > 0){
            answer = pair.first;
            break;
        }
    }
    
    return answer;
}
