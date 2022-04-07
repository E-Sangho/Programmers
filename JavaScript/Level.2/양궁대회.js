/*
	목표: 라이언이 최대 차이로 승리하는 경우 구하기
    -> 최대 차이: maxDif, 승리하는 경우: winCase를 구해야 한다.
    
    라이언이 우승 할 수 있을 경우 winCase 반환,
    우승 할 수 없으면 [-1] 반환.
    -> maxDif === 0 이면 [-1] 반환,
   	   maxDif !== 0 이면 winCase 반환.
    
    winCase가 여러 개이면 낮은 점수를 쏜 것을 반환
    
    winCase는 깊이가 11뿐이고 각 가지가 2개씩이므로 DFS로 풀 수 있다.
    DFS {
    	if (shotNum > n) {
        	return			
        }
    	if (depth === 11 || shotNum === n) {
        	if (maxDif < *scoreDif) {
            	maxDif = scoreDif
                winCase = lionShot
            }
            if (maxDif === scoreDif) {
            	if (*lionShot이 winCase보다 낮은 점수를 많이 맞춘 경우) {
                	winCase = lionShot
                }
            }
        }
        DFS
    }
 */

function scoreDif(lionShot, apeachShot) {
	let apeachScore = 0,
		lionScore = 0;
	for (let i = 0; i < 11; ++i) {
		if (apeachShot[i] >= lionShot[i] && apeachShot[i] > 0) {
			apeachScore += 10 - i;
		}
		if (lionShot[i] > apeachShot[i]) {
			lionScore += 10 - i;
		}
	}
	return lionScore - apeachScore;
}

function isLionShotLower(shot1, shot2) {
	let first = [...shot1].reverse().join(""),
		second = [...shot2].reverse().join("");
	if (first > second) {
		return true;
	}
	return false;
}

function DFS(n, apeachShot) {
	const lionWinScore = apeachShot.map((e) => e + 1);
	const lionShot = Array.from({ length: 11 }, () => 0);
	let maxDif = 0;
	let answer = [];

	function DFSUtil(depth, shotNum) {
		if (shotNum > n) {
			return;
		}
		if (shotNum === n || depth === 11) {
			if (shotNum < n) {
				lionShot[10] += n - shotNum;
			}
			const dif = scoreDif(lionShot, apeachShot);
			if (maxDif < dif) {
				maxDif = dif;
				answer = lionShot.slice();
			}
			if (maxDif === dif) {
				if (isLionShotLower(lionShot, answer)) {
					answer = lionShot.slice();
				}
			}
			lionShot[10] = 0;
			return;
		}
		lionShot[depth] = lionWinScore[depth];
		DFSUtil(depth + 1, shotNum + lionWinScore[depth]);
		lionShot[depth] = 0;
		DFSUtil(depth + 1, shotNum);
	}

	DFSUtil(0, 0, lionShot);
	if (maxDif === 0) {
		return [-1];
	}
	return answer;
}

function solution(n, info) {
	return DFS(n, info);
}
