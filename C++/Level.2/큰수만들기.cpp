#include <string>
#include <vector>
#include <algorithm>

using namespace std;

string solution(string number, int k) {
    string answer = "";
    int len = number.length();
    int start = 0;
    for(int i = 1; i <= len - k; ++i) {
        char max_temp = '0';
        for(int j = start; j < min(len, k + i); ++j) {
            if(max_temp < number[j]) {
                max_temp = number[j];
                start = j + 1;
            }
        }
        answer += max_temp;
    }
    return answer;
}