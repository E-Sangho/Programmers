#include <string>
#include <vector>
#include <iostream>

#define p 1000000007 

using namespace std;

int solution(int m, int n, vector<vector<int>> puddles) {
    int answer = 0;
    vector<vector<int>> dp(m + 1, vector<int> (n + 1));
    dp[1][1] = 1;
    for (auto puddle : puddles) {
        dp[puddle[0]][puddle[1]] = -1;
    }
   	for (int i = 1; i <= m; ++i) {
        for (int j = 1; j <= n; ++j) {
            if (dp[i][j] == -1) {
                continue;
            }
            if (1 <= i-1 && i-1 <= m && dp[i-1][j] != -1) {
                dp[i][j] = (dp[i][j] + dp[i-1][j]) % p;
            }
            if (1 <= j-1 && j-1 <= n && dp[i][j-1] != -1) {
                dp[i][j] = (dp[i][j] + dp[i][j-1]) % p;
            }
        }
    } 
    return dp[m][n];
}