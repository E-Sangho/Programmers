#include <iostream>

using namespace std;

void printSubsets(char data[], int n) {
    for(int i = 0; i < (1<<n); ++i) {
        cout << '{';
        for(int j = 0; j < n; ++j) {
            if(i & (1<<j)) {
                cout << data[j] << " ";
            }
        }
        cout << '}' << endl;
    }
}

int main() {
    char data[] = {'A', 'B', 'C', 'D'};
    printSubsets(data, 4);

    return 0;
}