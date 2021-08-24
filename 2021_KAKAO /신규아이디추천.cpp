#include <string>
#include <vector>

using namespace std;

bool check_length(string &s)
{
    int length = s.length();
    if(3 <= length && length <= 15)
        return true;
    else return false;
}

bool check_letters(string &s)
{
    int length = s.length();
    for(int i = 0; i < length; ++i)
    {
        if(s[i] != '-' || s[i] != '_' || s[i] != '.' || !('a' <= s[i] && s[i] <= 'z')) {
            return false;
        }
    }
    return true;
}

bool check_dot(string &s)
{
    int length = s.length();
    if(s.find("..") != string::npos) return false;
    if(s.front() == '.' || s.back() =='.') return false;
    else return true;
}

void to_small_letters(string &s)
{
    int length = s.length();
    for(int i = 0; i < length; ++i)
    {
        if('A' <= s[i] && s[i] <= 'Z')
            s[i] += 'a' - 'A';
    }
}

void erase_letters(string &s)
{
    for(int i = 0; i < s.length();)
    {
        if(s[i] != '-' && s[i] != '_' && s[i] != '.' && !('a' <= s[i] && s[i] <= 'z') && !('0' <= s[i] && s[i]<= '9')) {
            s.erase(s.begin() + i);
        }
        else ++i;
    }
}

void check_dots(string &s)
{
    while(s.find("..") != string::npos)
    {
        s.replace(s.find(".."), 2, ".");
    }
}

void erase_first_last_dots(string &s)
{
    int length = s.length();
    if(s.front() == '.') s.erase(s.begin());
    if(s.back() == '.') s.erase(s.end()-1);
}

void is_empty_string(string &s)
{
    if(s.empty()) s = "a";
}

void longer_than_15(string &s)
{
    if(s.length() >= 16)
    {
        s.erase(s.begin() + 15, s.end());
        if(s.back() == '.') s.erase(s.end() - 1);
    }
}

void shorter_than_3(string &s)
{
    if(s.length() <= 2)
    {
        while(s.length() != 3)
        {
            s.push_back(s.back());
        }
    }
}


string solution(string new_id) {
    string answer = "";
    bool check = check_length(new_id) && check_letters(new_id) && check_dot(new_id) ;

    
    if(!check) {
        to_small_letters(new_id);
        erase_letters(new_id);
        check_dots(new_id);
        erase_first_last_dots(new_id);
        is_empty_string(new_id);
        longer_than_15(new_id);
        shorter_than_3(new_id);
    }
    answer = new_id;
    return answer;
}