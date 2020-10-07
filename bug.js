import "@formatjs/intl-datetimeformat/polyfill-force.js";
import "@formatjs/intl-datetimeformat/locale-data/en.js";
import "@formatjs/intl-datetimeformat/add-all-tz.js";

const result = new Intl.DateTimeFormat("en-US", {
  locale: "en",
  calendar: "gregory",
  numberingSystem: "latn",
  timeZone: "Africa/Johannesburg", // GMT+2
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}).format(new Date(Date.UTC(2020, 0, 1, 12, 0, 0)));

console.log(result);

// Result: "1/1/2020, 1:30:00 PM"
// Expected: "1/1/2020, 2:00:00 PM"
