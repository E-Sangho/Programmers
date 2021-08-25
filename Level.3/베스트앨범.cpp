#include <string>
#include <vector>
#include <map>
#include <algorithm>

using namespace std;

bool cmp(pair<int, string> a, pair<int, string> b)
{
    return a.first > b.first;
}

bool compare(pair<int, int> a, pair<int, int> b)
{
    return a.first > b.first;
}
vector<int> solution(vector<string> genres, vector<int> plays) {
    vector<int> answer;
    map<string, int> song_table;
    int song_number = genres.size();
    
    for(int i = 0; i < song_number; ++i)
    {
        song_table[genres[i]] += plays[i];
    }
    
    map<string, int>::iterator iter;
    string key = "";
    int played = 0;
    vector<pair<int, string>> vec;
    
    for(iter = song_table.begin(); iter != song_table.end(); ++iter)
    {
        vec.push_back({iter->second, iter->first});
    }
    sort(vec.begin(), vec.end(), cmp);
    
    for(int i = 0; i < vec.size(); ++i)
    {
        string key = vec[i].second;
        vector<pair<int, int>> temp;
        for(int j = 0; j < song_number; ++j)
        {
            if(genres[j] == key)
            {
                temp.push_back({plays[j], j});
            }
        }
        sort(temp.begin(), temp.end(), compare);
        if(temp.size() == 1)
        {
            answer.push_back(temp[0].second);
        }
        else
        {
            answer.push_back(temp[0].second);
            answer.push_back(temp[1].second);
        }
    }

    return answer;
}