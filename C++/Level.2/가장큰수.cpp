#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool compare (int a, int b) {
	string a_s = to_string(a), b_s = to_string(b);
    return stoi(a_s + b_s) > stoi(b_s + a_s);
}

string solution(vector<int> numbers) {
    string answer = "";
    sort (numbers.begin(), numbers.end(), compare);
    int n = numbers.size();
    for (int i = 0; i < n; ++i) {
       	answer += to_string(numbers[i]); 
    }
    if (answer[0] == '0') answer = "0";
    return answer;
}