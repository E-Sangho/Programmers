#include <string>
#include <vector>
#include <iostream>

using namespace std;

int solution(int bridge_length, int weight, vector<int> truck_weights) {
    int time = 1;
    int c_weight = 0;
    int index = 0;
    int truck_num = truck_weights.size();
    vector<pair<int, int>> crossing;
    do {
        if(
       		crossing.size() > 0 && 
           	crossing[0].second == time
        ) {
            c_weight -= crossing[0].first;
       		crossing.erase(crossing.begin()); 
        }
        
      	if (
            index < truck_num &&
            c_weight + truck_weights[index] <= weight
        ) {
         	c_weight += truck_weights[index];
            crossing.push_back({ truck_weights[index], time + bridge_length });
            ++index;
            ++time;
        } else {
        	time = crossing[0].second;    
        } 
    } while (c_weight > 0);
    return time;
}