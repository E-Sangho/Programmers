#include <iostream>
#include <string>
#include <stack>

using namespace std;

int solution(string s)
{
	stack<char> st;
    int n = s.length();
	for (int i = 0; i < n; ++i) {
        if (st.empty() || st.top() != s[i]) {
            st.push(s[i]);
        } else {
            st.pop();
        }
    }
	
    return st.size() == 0;
}