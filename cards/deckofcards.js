"use strict";

const BASE_API_URL = "https://deckofcardsapi.com/api/";

let deckId; //DECK_ID?


async function start() {
    //Step 1: get a deck and draw
    deckId = await getDeckId();
    await shuffleDrawAndDisplayNCards(deckId, 1);
    //step 2: shuffle draw shuffle draw
    await shuffleDrawAndDisplayNCards(deckId, 1);
    await shuffleDrawAndDisplayNCards(deckId, 1);


}

// make api call to get deck of cards (id)
async function getDeckId() {
    const resp = await axios.get(`${BASE_API_URL}/deck/new`);
    return resp.data.deck_id;
}


async function shuffle(deckID) {
    console.log('shuffling...')
    await axios.post(`${BASE_API_URL}/deck/${deckId}/shuffle/?remaining=true`);
}


async function getNCards(deckId, numCards) {

    const promises = [];

    promises.push(
        axios({
            method:'POST',
            url: `${BASE_API_URL}/deck/${deckId}/draw/?count=${numCards}`
        })
    );
    numCards--;

    const cards = await Promise.all(promises);
    // console.log('cards',cards)
    // console.log(cards[0].data.cards[0].value)

    // for(const card of cards){
    //     console.log(
    //         card.data.cards[0].value,
    //         'of',
    //         card.data.cards[0].suit)
    // }
    return cards;
}


async function shuffleDrawAndDisplayNCards(deckId, numCards) {
    console.log('shuffleDrawAndDisplayNCards called')

    await shuffle(deckId);
    const cards = await getNCards(deckId, numCards);

    for (const card of cards) {
        displayCard(card);
    }

}

function displayCard(card) {
    // console.log(card)
    // console.log(
    //     'card drawn:',
    //     card.data.cards[0].value,
    //     'of',
    //     card.data.cards[0].suit
    // );
    // console.log(card.data.remaining,"cards remaining")
}


// const drawOne = (function { shuffleDrawAndDisplayNCards(deckId, 1); });


start();
/**
 *
 * https://deckofcardsapi.com/api/deck/new/
 *
 * shuffule url:
https://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/?remaining=true

 * draw url: https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2
 */

// make function to draw n cards


// make function to log card values





// https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
// //shuffles deck and returns success response

// https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1
// //draws <count> cards

// {
//     "success": true,
//         "deck_id": "kxozasf3edqu",
//             "cards": [
//                 {
//                     "code": "6H",
//                     "image": "https://deckofcardsapi.com/static/img/6H.png",
//                     "images": {
//                         "svg": "https://deckofcardsapi.com/static/img/6H.svg",
//                         "png": "https://deckofcardsapi.com/static/img/6H.png"
//                     },
//                     "value": "6",
//                     "suit": "HEARTS"
//                 },;

//TODO: console log value, suit