#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> array, vector<vector<int>> commands) {
    vector<int> answer;
    for (auto command : commands) {
        int i = command[0] - 1, j = command[1], k = command[2] - 1;
        vector<int> temp_array = array;
        sort(temp_array.begin() + i, temp_array.begin() + j);
        answer.push_back(temp_array[i + k]);
    }
    return answer;
}