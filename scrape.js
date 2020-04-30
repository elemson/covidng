const puppeteer = require("puppeteer");

const GetItems = async () => {
  let ItemArray = [];

  console.log(ItemArray);
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();
  await page.goto(
    "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Nigeria"
  );

  await page

    .waitForSelector(".wikitable > tbody")
    .then(() => {
      page.evaluate(() => {
        const ItemNodeList = document.querySelectorAll(
          ".wikitable.sortable.jquery-tablesorter > tbody > tr "
        );

        ItemNodeList.forEach((item) => {
          const states = item.querySelectorAll("th");
          const iner = item.querySelectorAll("td");
          var all = {
            states: states[0].innerText,
            cases: iner[0].innerText,
            active: iner[1].innerText,
            recovered: iner[2].innerText,
            deaths: iner[3].innerText,
          };
          ItemArray.push(all);
        });
        console.log(ItemArray);
        console.log(array2);
      });

      return ItemArray;
    })
    .catch(() => console.log("selector error"));
};

GetItems();
