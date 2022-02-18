#include <string>
#include <vector>

using namespace std;


vector<int> solution(int brown, int yellow) {
    vector<int> answer;
    for(int row = 1; row * row <= yellow; ++row) {
        if(yellow % row == 0) {
            int column = yellow / row;
            if(brown == ((row+2) * (column+2) - yellow))
            {
                answer.push_back(column+2);
                answer.push_back(row+2);
                break;
            }
        }
    }
    return answer;
}