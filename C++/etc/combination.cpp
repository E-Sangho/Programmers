#include <iostream>
#include <string>
#include <vector>


using namespace std;

/* combination 필요한 조건
    1. Variable
        1) 뽑은 글자를 저장할 vector<char> arr
        2) arr 위치를 표현할 index
        3) 뽑아야 하는 수 r(index로 대체 가능)
        4) list를 받아올 자료구조 e.g. vector, string, arr
        5) list의 위치를 표현할 depth
    2. 경우의 수
        1) end
            (1) 필요한 수를 모두 뽑은 경우 (r == 0)
            (2) 필요한 수를 다 못 뽑은 경우 (depth == list.size())
        2) process(recursion)
            (1) list[depth]를 뽑은 경우 
                arr[index] = list[depth]
                index += 1, depth += 1
            (2) list[depth]를 뽑지 않은 경우
                depth += 1;
 */

void combination1(string input, vector<char> arr, vector<string> &answer, int r, int index, int depth) {
    if(r == 0) {
       string s = "";
       for(int i = 0; i < arr.size(); ++i) {
           s += arr[i];
       }
       answer.push_back(s);
       return;
    }

    if(depth == input.size()) {
        return;
    }

    arr[index] = input[depth];
    combination1(input, arr, answer, r-1, index+1, depth+1);

    combination1(input, arr, answer, r, index, depth+1);
}

void combination2(string input, vector<char> arr, vector<string> &answer, int index, int depth) {
    if(depth == arr.size()) {
        string s = "";
        for(int i = 0; i < arr.size(); ++i) {
            s +=  arr[i];
        }
        answer.push_back(s);
        return;
    }

    for(int i = index; i < input.size(); ++i) {
        arr[depth] = input[i];
        combination2(input, arr, answer, i+1, depth+1);
    }

}

void combination3(string input, vector<char> arr, vector<string> &answer, int start, int index) {
    if(index == 3) {
        string s = "";
        for(int i = 0; i < arr.size(); ++i) {
            s +=  arr[i];
        }
        answer.push_back(s);
        return;
    }

    for(int i = start; i < input.size() && input.size() - i >= 3 - index; ++i) {
        arr[index] = input[i];
        combination2(input, arr, answer, i+1, index+1);
    }

}

void print(vector<string> v) {
    for(int i = 0; i < v.size(); ++i) {
        cout << v[i] << endl;
    }
}

int main() {
    string input = "abcde";
    vector<string> answer;
    int r = 3;
    vector<char> arr(r);
    combination3(input, arr, answer, 0, 0);
    print(answer);
}