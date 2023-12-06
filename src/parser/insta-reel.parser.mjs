import puppeteer from "puppeteer";
import * as cheerio from "cheerio";
import removeQueryFromUrl from "../utils/remove-query-from-url.mjs";
import ReelCache from "../schema/reel-cache.schema.mjs";

async function getHTML(url) {
  // Launch a headless browser instance
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox"],
  });

  // Create a new page
  const page = await browser.newPage();

  // Navigate to a URL
  await page.goto(url);

  // Wait for the video tag to appear
  await page.waitForSelector("video");

  // Get the HTML content
  const html = await page.content();

  // Close the browser
  await page.close();
  await browser.close();

  // Return the HTML content
  return html;
}

export async function getReelVideo(url) {
  const html = await getHTML(url);

  // calls cheerio to process the html received
  const $ = cheerio.load(html);

  // Searches the html for the video tag and get the src atttribute
  const videoDirectLink = $("video").attr("src");

  // returns the direct video link
  return videoDirectLink;
}

export async function cacheReelInfo(url) {
  console.log(`[PROCESSING]: ${url}`);
  const clean_url = removeQueryFromUrl(url);

  let ReelInfo = undefined;
  const ReelData = await ReelCache.findOne({ url: clean_url });

  const reelOpenGraph = await (
    await fetch(
      `${process.env.OPEN_GRAPH_API_URL}?` +
        new URLSearchParams({
          url: clean_url,
        })
    )
  ).json();

  if (ReelData) {
    ReelInfo = {
      title: reelOpenGraph.ogTitle,
      url: clean_url,
      description: reelOpenGraph.ogDescription,
      thumbnail: reelOpenGraph.ogImage,
      download_link: ReelData.download_link,
    };
  } else {
    ReelInfo = {
      title: reelOpenGraph.ogTitle,
      url: clean_url,
      description: reelOpenGraph.ogDescription,
      thumbnail: reelOpenGraph.ogImage,
      download_link: await getReelVideo(clean_url),
    };

    await ReelCache.create({ ...ReelInfo, dateCreated: Date.now() });
  }

  return ReelInfo;
}
