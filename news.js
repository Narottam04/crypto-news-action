// const googleNewsAPI = require("google-news-json");
const googleNewsScraper = require("google-news-scraper");

const fs = require("fs");

async function fetchNews() {
  try {
    // const news = await googleNewsAPI.getNews(
    //   googleNewsAPI.SEARCH,
    //   "cryptocurrency"
    // );
    // const newsData = JSON.stringify(news.items, null, 2);
    // fs.writeFileSync("news.json", `${newsData}`);

    const articles = await googleNewsScraper({
      searchTerm: "Cryptocurrency",
      prettyURLs: false,
      queryVars: {
        hl: "en-US",
        gl: "US",
        ceid: "US:en",
      },
      timeframe: "24h",
      puppeteerArgs: [],
    });

    const newsData = JSON.stringify(articles, null, 2);
    fs.writeFileSync("news.json", `${newsData}`);

    console.log("News updated successfully", newsData.length, newsData);
  } catch (error) {
    console.error("Error fetching news:", error);
    process.exit(1);
  }
}

fetchNews();
