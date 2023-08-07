"use strict";

const $results = $("#results");

/** FIRST */

const response = axios.get("http://numbersapi.com/23?json");

/** SECOND:
 * Accepts array of numbers and appends fact about each one to the DOM */

async function displayFactForEachNum(nums) {

  //TODO: create helper function for stringify
  let query = nums.reduce((acc, cur) => acc += (String(cur) + ","), "");
  query = query.slice(0, query.length - 1);

  const response = await axios.get(`http://numbersapi.com/${query}`);
  const data = response.data;

  for (const num in data) {
    $results.append(`<p>${data[num]}</p>`);
  }
  //header for your viewing pleasure
  $results.append('<h2>sendRequests END</h2>');
}

displayFactForEachNum([2, 3]);

/** THIRD:
 * Accepts favorite number and number of facts desired;
 * appends numFacts facts about favNum to the DOM
 */

//TODO: get and display? /\ \/
async function displayNFactsAboutNum(favNum, numFacts) {

  //TODO: promises \/
  const requests = [];

  while (numFacts > 0) {
    requests.push(axios({ url: `http://numbersapi.com/${favNum}` }));
    numFacts--;
  }

  //TODO: resolvedPromises \/
  const resultsPromise = await Promise.all(
    requests);

  for (const i in resultsPromise) {
    $results.append(`<p>${resultsPromise[i].data}</p>`);
  }
  //header for your viewing pleasure
  $results.append('<h2>batchRequests END</h2>');
}

displayNFactsAboutNum(2, 4);


