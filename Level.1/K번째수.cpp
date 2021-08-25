#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> array, vector<vector<int>> commands) {
    vector<int> answer;
    for(auto column : commands)
    {
        vector<int> temp;
        int i = column[0];
        int j = column[1];
        int k = column[2];
        temp.assign(array.begin() + i - 1, array.begin() + j);
        sort(temp.begin(), temp.end());
        answer.push_back(temp[k-1]);
    }
    return answer;
}