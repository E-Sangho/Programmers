#include <string>
#include <vector>

using namespace std;

int change(char c) {
    return min(c - 'A', 'Z'- c + 1);
}

int solution(string name) {
    int answer = 0, pos = 0;
    int len = name.length();
    string As(len, 'A');
    for(int i = 0; i < len; ++i) {
        answer += change(name[i]);
    }
    
    while(name != As) {
        name[pos] = 'A';
        int right = pos, left = pos;
        int r_cnt = 0, l_cnt = 0;
        if(name == As) break;
        while(name[right] == 'A' && r_cnt <= len) {
            if(right == len - 1) right = 0;
            else ++right;
            ++r_cnt;
        }
        while(name[left] == 'A' && l_cnt <= len) {
            if(left == 0) left = len - 1;
            else --left;
            ++l_cnt;
        }
        
        if(l_cnt < r_cnt){
            
            pos = left;
            answer += l_cnt;
        }
        else{
            pos = right;
            answer += r_cnt;
        }
    }
    
    return answer;
}