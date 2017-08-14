import Card from "./Card";

export default class MinionCard extends Card {
	public bodyTextColor = "black";
	public bodyTextSize = {width: 520, height: 290};
	public baseCardFrameAsset = "frame-minion-";
	public baseCardFrameCoords = {
		sWidth: 528,
		sHeight: 793,
		dx: 70,
		dy: 89,
		dWidth: 528,
		dHeight: 793,
	};
	public baseRarityGemAsset = "rarity-minion-";
	public nameBannerAsset = "name-banner-minion";
	public dragonAsset = "elite-minion";
	public dragonCoords =  {
		sWidth: 436,
		sHeight: 325,
		dx: 188,
		dy: 52,
		dWidth: 436,
		dHeight: 325,
	};
	public attackGemAsset = "attack-minion";
	public healthGemAsset = "health";
	public attackGemCoords = {
		sWidth: 154,
		sHeight: 173,
		dx: 36,
		dy: 721,
		dWidth: 154,
		dHeight: 173,
	};
	public attackTextCoords = {x: 125, y: 824};
	public healthGemCoords = {
		sWidth: 109,
		sHeight: 164,
		dx: 504,
		dy: 728,
		dWidth: 109,
		dHeight: 164,
	};
	public healthTextCoords = {x: 556, y: 825};
	public nameBannerCoords = {
		sWidth: 485,
		sHeight: 113,
		dx: 96,
		dy: 469,
		dWidth: 485,
		dHeight: 113,
	};
	public rarityGemCoords = {dx: 263, dy: 532};
	public nameTextCurve = {
		pathMiddle: 0.55,
		maxWidth: 560,
		curve: [{x: 0, y: 110}, {x: 122, y: 140}, {x: 368, y: 16}, {x: 580, y: 100}],
	};
	public artCoords = {
		sWidth: 461,
		sHeight: 461,
		dx: 105,
		dy: 100,
		dWidth: 461,
		dHeight: 461,
	};
	public artClipPolygon = [
		{x: 335, y: 102},
		{x: 292, y: 110},
		{x: 256, y: 131},
		{x: 222, y: 163},
		{x: 195, y: 203},
		{x: 171, y: 273},
		{x: 163, y: 330},
		{x: 170, y: 398},
		{x: 200, y: 474},
		{x: 266, y: 547},
		{x: 302, y: 563},
		{x: 343, y: 567},
		{x: 406, y: 544},
		{x: 449, y: 506},
		{x: 488, y: 432},
		{x: 505, y: 346},
		{x: 494, y: 255},
		{x: 460, y: 172},
		{x: 425, y: 135},
		{x: 385, y: 111},
	];

	public getWatermarkCoords() {
		let dy = 604;
		if (this.raceText) {
			dy -= 16; // Shift up
		}

		return {
			dx: 231,
			dy: dy,
			dWidth: 225,
			dHeight: 225,
		};
	}
}
