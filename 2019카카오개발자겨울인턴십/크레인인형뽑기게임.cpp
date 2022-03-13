#include <string>
#include <vector>
#include <stack>

using namespace std;

int solution(vector<vector<int>> board, vector<int> moves) {
    int answer = 0;
   	stack<int> s; 
    for (auto move : moves) {
        for (int j = 0; j < board.size(); ++j) {
        	if (board[j][move-1]) {
                if (s.empty() || s.top() != board[j][move-1]) {
               		s.push(board[j][move- 1]);
                    board[j][move-1] = 0;
                } else {
                    s.pop();
                    board[j][move-1] = 0;
                   	answer += 2; 
                }
                break;
            }
        }
    }
    return answer;
}