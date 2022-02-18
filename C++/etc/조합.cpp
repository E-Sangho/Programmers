#include <iostream>

using namespace std;
int N = 4;
int Nums[] = {1,2,3,4};

int solve(int cnt, int pos, int val) {
    if(cnt == 2) return val;
    if(pos == 4) return -1;
    int ret = 0;
    ret = max(ret, solve(cnt+1, pos+1, val+Nums[pos]));
    ret = max(ret, solve(cnt, pos+1, val));

    return ret;
}

int main() {
    cout << solve(0, 0, 0);
    return 0;
}
