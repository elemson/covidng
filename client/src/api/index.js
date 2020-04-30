import axios from "axios";
import cheerio from "cheerio";

const url = "https://covid19.mathdro.id/api";
const url2 = "https://corona.lmao.ninja/v2";
const url3 =
  "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Nigeria";

export const fetchData = async (country) => {
  let changeableUrl = `${url2}/countries/Nigeria`;

  if (country) {
    changeableUrl = `${url2}/countries/${country}`;
  }

  try {
    const {
      data: {
        tests,
        cases,
        // active,
        recovered,
        deaths,
        // todayCases,
        // casesPerOneMillion,
        // todayDeaths,
        // critical,
        // updated,
      },
    } = await axios.get(changeableUrl);

    const modifiedData = {
      tests: [tests, "#43b67e"],
      cases: [cases, "rgba(0, 0, 255, 0.5)"],
      recovered: [recovered, "rgba(0,255,0, 0.5)"],
      deaths: [deaths, " rgba(255,0,0,0.5)"],
      //   active: [active, "#2fc5e9"],

      //   todayCases: [todayCases, "#c1a646"],
      //   casesPerOneMillion: [casesPerOneMillion, "rgba(0, 0, 255, 0.5)"],
      //   todayDeaths: [todayDeaths, "#767767"],
      //   critical: [critical, "#f44336"],
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const scrapeStates = axios.get(url3).then((body) => {
  let scrapedStates = [];
  const $ = cheerio.load(body.data);
  const table = $(".wikitable tbody tr");

  $(table).each((i, el) => {
    const states = $(el).find("a").text();
    const cases = $(el).find("td b").text();
    const active = $(el).find("td").first().next().text();
    const recovered = $(el).find("td").first().next().next().text();
    const death = $(el).find("td").first().next().next().next().text();

    var data = {
      states,
      cases,
      active,
      recovered,
      death,
    };

    scrapedStates.push(data);
  });
  console.log(scrapedStates);
  return scrapedStates;
});

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
