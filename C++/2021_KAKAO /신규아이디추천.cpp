#include <string>
#include <vector>

using namespace std;

void large2small(string &s) {
    for(int i = 0; i < s.length(); ++i) {
        if('A' <= s[i] && s[i] <= 'Z') {
            s[i] = s[i] - 'A' + 'a';
        }
    }
}

void eraseLetter(string &s) {
    for(int i = 0; i < s.length();) {
        if(!(('a' <= s[i] && s[i] <='z') || ('0' <= s[i] && s[i] <= '9') || s[i] == '-' || s[i] == '_' || s[i] == '.')
           )
        {
            s.erase(i, 1);
        }
        else ++i;
    }
}

void subDot(string &s) {
    while(s.find("..") != string::npos) {
        s.replace(s.find(".."), 2, ".");
    }
}

void eraseFirstLastDot(string &s) {
    if(s[0] == '.') s.erase(0, 1);
    if(s[s.length()-1] == '.') s.erase(s.length()-1);
}

void ifEmpty(string &s) {
    if(s.empty()) {
        s = "a";
    }
}

void longerThan15(string &s) {
    if(s.length() > 15) {
        s = s.substr(0, 15);
    }
    if(s[s.length()-1] == '.') {
        s.erase(s.length()-1);
    }
}

void shorterThan3(string &s) {
    if(s.length() < 3) {
        while(s.length() < 3) {
            s += s.back();
        }
    }
}

string solution(string new_id) {
    string answer = "";
    large2small(new_id);
    eraseLetter(new_id);
    subDot(new_id);
    eraseFirstLastDot(new_id);
    ifEmpty(new_id);
    longerThan15(new_id);
    shorterThan3(new_id);
    answer = new_id;
    return answer;
}