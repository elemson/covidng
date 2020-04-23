import axios from "axios";
import { CardActions } from "@material-ui/core";

const url = "https://covid19.mathdro.id/api";
const url2 = "https://corona.lmao.ninja/v2";

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
        active,

        recovered,
        deaths,
        todayCases,
        casesPerOneMillion,
        todayDeaths,
        critical,
      },
    } = await axios.get(changeableUrl);

    //"#2fc5e9"

    const modifiedData = {
      tests: [tests, "#43b67e"],
      cases: [cases, "rgba(0, 0, 255, 0.5)"],
      recovered: [recovered, "rgba(0,255,0, 0.5)"],
      deaths: [deaths, " rgba(255,0,0,0.5)"],
      active: [active, "#2fc5e9"],

      todayCases: [todayCases, "#c1a646"],
      casesPerOneMillion: [casesPerOneMillion, "rgba(0, 0, 255, 0.5)"],
      todayDeaths: [todayDeaths, "#767767"],
      critical: [critical, "#f44336"],
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

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

export const fetchNewCountries = async () => {
  try {
    const { data } = await axios.get(`${url2}`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
