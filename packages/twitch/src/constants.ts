export enum Links {
  Website = "https://jaysonjphillips.com",
  Twitter = "https://twitter.com/_jjphillips",
  Github = "https://github.com/jaysonjphillips",
  DEVTo = "https://dev.to/jaysonjphillips",
  JSONPbot = "https://github.com/jaysonjphillips/jsonpbot",
  CODE2040 = "https://code2040.org",
  CurrentCampaign =
    "https://tiltify.com/@jsonp/pull-up-and-code-celebration-for-charity-june-2020",
}

export const CommandMessages = {
  Hue: `Light effect redeemed`,
  Theme:
    `Jayson is using the SynthWave '84 theme by Robb Owen. You can download it here: https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode`,
  Socials:
    `You can catch up with Jayson on the following platforms: Twitter: ${Links.Twitter}, Github: ${Links.Github}, ${Links.DEVTo} & ${Links.Website} elsewhere on the web.`,
  Project:
    `Today's project is all about our stream bot, named JSONPbot. No, it does not use JSONP, but, my name is Jayson P. Get it? JSONP, Jayson P... lol. See the repo at ${Links.JSONPbot}`,
  Charity:
    `This week's charity is all about ${Links.CODE2040}! We're raising funds for this awesome initiative which aims to make tech more equitable and inclusive for Black and Latinx engineers. The campaign can be found at ${Links.CurrentCampaign} - tell a friend and thanks for the support!`,
};
