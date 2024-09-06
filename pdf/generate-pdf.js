const puppeteer = require("puppeteer");

async function generatePdf({ url/* , margin = {} */ }) {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ["--no-sandbox"],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: false,
      isLandscape: false,
    },
  });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
  await page.emulateMediaType("screen");

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    //margin: {top: margin.top || "2cm",right: margin.right || "0.5cm",bottom: margin.bottom || "2cm",left: margin.left || "0.5cm",},
  });
  await browser.close();
  return pdf;
}

module.exports = generatePdf;
