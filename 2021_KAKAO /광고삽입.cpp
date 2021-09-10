#include <string>
#include <vector>

using namespace std;

int toSeconds(string s) {
    int hours = stoi(s.substr(0,2)) * 3600;
    int minutes = stoi(s.substr(3,2)) * 60;
    int seconds = stoi(s.substr(6,2));
    return hours + minutes + seconds;
}

string sToString(int &seconds) {
    int hour = seconds / 3600;
    seconds -= hour * 3600;
    int minutes = seconds / 60;
    seconds -= minutes * 60;
    string s = "";
    if(hour < 10) s += ("0" + to_string(hour));
    else s += to_string(hour);
    s += ":";
    if(minutes < 10) s += ("0" + to_string(minutes));
    else s += to_string(minutes);
    s += ":";
    if(seconds < 10) s += ("0" + to_string(seconds));
    else s += to_string(seconds);
    return s;
}

string solution(string play_time, string adv_time, vector<string> logs) {
    string answer = "";
    int dp[360000] = {0,};
    int p_time = toSeconds(play_time);
    int a_time = toSeconds(adv_time);
    for(string log : logs) {
        dp[toSeconds(log.substr(0, 8))]++;
        dp[toSeconds(log.substr(9, 8))]--;
    }
    
    for(int i = 1; i < 360000; ++i) {
        dp[i] += dp[i-1];
    }
    
    long long sum = 0;
    for(int i = 0; i < a_time; ++i) {
        sum += dp[i];
    }
    long long max = sum;
    int max_time = 0;
    for(int i = a_time; i < p_time; ++i) {
        sum += dp[i] - dp[i-a_time];
        if(max < sum) {
            max = sum;
            max_time = i - a_time + 1; 
        }
    }
    answer = sToString(max_time);
    return answer;
}