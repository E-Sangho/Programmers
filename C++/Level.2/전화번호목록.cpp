#include <iostream>
#include <map>
#include <vector>

using namespace std;

bool solution(vector<string> phone_book) {
    map<string, int> mp;
    int book_size = phone_book.size();
    for(int i = 0; i < book_size; ++i)
    {
        mp.insert({phone_book[i], 1});
    }
    map<string, int>::iterator iter1;
    map<string, int>::iterator iter2 = ++mp.begin();
    for(iter1 = mp.begin(); iter2 != mp.end();)
    {
        if(iter1->first == iter2->first.substr(0, (iter1->first).size()))
        {
            return false;   
        }
        ++iter1;
        ++iter2;
    }
    return true;
}