#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool compare(string s1, string s2)
{
    if(s1 + s2 > s2 + s1) return true;
    else return false;
}

string solution(vector<int> numbers) {
    string answer = "";
    vector<string> box;
    for(int i = 0; i < numbers.size(); ++i)
    {
        box.push_back(to_string(numbers[i]));
    }
    sort(box.begin(), box.end(), compare);  
    for(int i = 0; i < box.size(); ++i)
    {
        answer += box[i];
    }
    if(answer[0] == '0') answer = "0";
    return answer;
}