#include <string>
#include <vector>
#include <algorithm>
#include <unordered_set>

using namespace std;

int solution(int N, int number) {
    vector<unordered_set<int>> numberList(9);
    for (int i = 1; i <= 8; ++i) {
        string temp = to_string(N);
        for (int j = 1; j < i; ++j) {
           	temp += to_string(N); 
        }
       	numberList[i].insert(stoi(temp)); 

        for (int j = 1; j < i; ++j) {
            int k = i - j;
            for (auto num1 : numberList[j]) {
                for (auto num2 : numberList[k]) {
                    numberList[i].insert(num1 + num2);
                    numberList[i].insert(num1 * num2);
                    if (num1 > num2) {
                    	numberList[i].insert(num1 - num2);
                    }
                    if (num2 != 0) {
                        numberList[i].insert(num1 / num2);
                    }
                }
            }
        }
    }
    
    for (int i = 1; i <= 8; ++i) {
		for (auto num : numberList[i]) {
            if (num == number) {
                return i;
            }
        }
    }
    return -1;
}