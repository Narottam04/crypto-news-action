// const googleNewsAPI = require("google-news-json");
// const googleNewsScraper = require("google-news-scraper");

const fs = require("fs");
// const path = require("path");

async function fetchNews() {
  try {
    // const news = await googleNewsAPI.getNews(
    //   googleNewsAPI.SEARCH,
    //   "cryptocurrency"
    // );
    // const newsData = JSON.stringify(news.items, null, 2);
    // fs.writeFileSync("news.json", `${newsData}`);

    // const articles = await googleNewsScraper({
    //   searchTerm: "Cryptocurrency",
    //   prettyURLs: false,
    //   queryVars: {
    //     hl: "en-US",
    //     gl: "US",
    //     ceid: "US:en",
    //   },
    //   timeframe: "24h",
    //   puppeteerArgs: [],
    // });

    const url =
      "https://real-time-news-data.p.rapidapi.com/search?query=Cryptocurrency&limit=500&time_published=7d&lang=en";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0be5c6889bmshdb8fcf9de98445bp15269ajsn21ebbe0b8333",
        "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();

    const newsData = JSON.stringify(result?.data, null, 2);
    if (result?.data.length > 0) {
      fs.writeFileSync("news.json", `${newsData}`);
    }

    console.log(result?.data);
  } catch (error) {
    console.error("Error fetching news:", error);
    process.exit(1);
  }
}

fetchNews();
