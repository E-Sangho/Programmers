function solution(citations) {
    var answer = 0;
    let n = citations.length;
    citations
        .sort((a, b) => a - b)
        .forEach((citation, index) => {
            answer = Math.max(answer, Math.min(citation, n - index));
        });
    return answer;
}
