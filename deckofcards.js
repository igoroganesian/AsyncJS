"use strict";

https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
//shuffles deck and returns success response

https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1
//draws <count> cards

{
  "success": true,
  "deck_id": "kxozasf3edqu",
  "cards": [
      {
          "code": "6H",
          "image": "https://deckofcardsapi.com/static/img/6H.png",
          "images": {
                        "svg": "https://deckofcardsapi.com/static/img/6H.svg",
                        "png": "https://deckofcardsapi.com/static/img/6H.png"
                    },
          "value": "6",
          "suit": "HEARTS"
      },

//TODO: console log value, suit