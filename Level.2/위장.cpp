#include <string>
#include <vector>
#include <map>

using namespace std;

int solution(vector<vector<string>> clothes) {
    int answer = 1;
    int clothes_size = clothes.size();
    map<string, int> clothes_map;
    for(int i = 0; i < clothes_size; ++i)
    {
        ++clothes_map[clothes[i][1]];
    }
    map<string, int>::iterator iter;
    for(iter = clothes_map.begin(); iter != clothes_map.end(); ++iter)
    {
        answer *= (iter->second + 1); 
    }
    
    answer -= 1;
    return answer;
}