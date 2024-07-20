const googleNewsAPI = require("google-news-json");
const fs = require("fs");

async function fetchNews() {
  try {
    const news = await googleNewsAPI.getNews(
      googleNewsAPI.SEARCH,
      "cryptocurrency"
    );
    const newsData = JSON.stringify(news.items, null, 2);
    // fs.writeFileSync("news.json", `module.exports = ${newsData};`);
    console.log("News updated successfully", newsData);
  } catch (error) {
    console.error("Error fetching news:", error);
    process.exit(1);
  }
}

fetchNews();
