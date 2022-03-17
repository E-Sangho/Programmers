#include <vector>
#include <stack>

using namespace std;

typedef pair<int, int> PI;

vector<vector<int>> marked;
int move_x[4] = {1, -1, 0, 0};
int move_y[4] = {0, 0, 1, -1};

int DFS(int x, int y, int m, int n, int val, vector<vector<int>> picture) {
    if (marked[x][y]) {
        return 0;
    }
    int count = 0;
   	stack<PI> s;
    s.push({x, y});
    while (!s.empty()) {
        x = s.top().first;
        y = s.top().second;
        s.pop();
        if (marked[x][y]) {
            continue;
        }
        ++count;
        marked[x][y] = 1;
        for (int i = 0; i < 4; ++i) {
            int n_x = x + move_x[i],
            	n_y = y + move_y[i];
            if (0 <= n_x && n_x < m &&
               	0 <= n_y && n_y < n &&
                picture[n_x][n_y] == val &&
                !marked[n_x][n_y]
               ) {
                s.push({n_x, n_y});
            }
        }
    }
    return count;
}

vector<int> solution(int m, int n, vector<vector<int>> picture) {
    int number_of_area = 0;
    int max_size_of_one_area = 0;
    marked = vector<vector<int>> (m, vector<int> (n, 0));
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            if (picture[i][j] == 0){
            	marked[i][j] = 1;
            }
        }
    }
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            if (picture[i][j] > 0){
            	int size = DFS(i, j, m, n, picture[i][j], picture);
                if (size > 0) ++number_of_area;
                max_size_of_one_area = max(max_size_of_one_area, size);
            }
        }
    }
    
    vector<int> answer(2);
    answer[0] = number_of_area;
    answer[1] = max_size_of_one_area;
    return answer;
}