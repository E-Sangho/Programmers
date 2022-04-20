function solution(word, pages) {
	let ansIndex = 0;
	let ansScore = 0;
	let webSite = new Map();
	const searchWord = new RegExp(`\\b${word.toUpperCase()}\\b`, "gm");
	const metaRegex = /<meta property="og:url" content="(.*)"\/>/;
	const anchorRegex = /<a href="(\S*)">/g;
	pages.forEach((page, i) => {
		const siteUrl = page.match(metaRegex)[1];
		const findWord = page
			.toUpperCase()
			.replace(/[^A-Z]/g, " ")
			.match(searchWord);
		let basicScore = 0;
		if (findWord !== null) {
			basicScore += findWord.length;
		}
		const findAnchor = [...page.matchAll(anchorRegex)].map(
			(anchor) => anchor[1]
		);
		let linkScore = 0;
		if (findAnchor.length !== 0) {
			linkScore = basicScore / findAnchor.length;
		}
		webSite.set(siteUrl, {
			score: basicScore,
			lscore: linkScore,
			anchor: findAnchor,
			index: i,
		});
	});
	for (let [key, value] of webSite) {
		const links = value["anchor"];
		links.forEach((link) => {
			if (webSite.has(link)) {
				let curScore = webSite.get(link)["score"];
				curScore += value["lscore"];
				webSite.set(link, {
					...webSite.get(link),
					score: curScore,
				});
			}
		});
	}
	for (let [key, value] of webSite) {
		const score = value["score"];
		const index = value["index"];
		if (ansScore < score) {
			ansScore = score;
			ansIndex = index;
		}
	}
	return ansIndex;
}
