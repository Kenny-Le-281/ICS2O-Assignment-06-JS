// Created by: Kenny Le
// Created on: May 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-06-JS/sw.js", {
    scope: "/ICS2O-Assignment-06-JS/",
  })
}

/**
 * Get API for dog image.
*/
const getAnimeQuote = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    const anime = jsonData.anime
    const character = jsonData.character
    const quote = jsonData.quote
    document.getElementById("api-anime").innerHTML = "Anime name: " + anime
    document.getElementById("api-character").innerHTML = "Character name: " + character
    document.getElementById("api-quote").innerHTML = "Quote name: " + '"' + quote + '"'
  } catch (err) {
    console.log(err)
    document.getElementById("api-anime").innerHTML = "Error fetching anime name."
    document.getElementById("api-character").innerHTML = "Error fetching character name."
    document.getElementById("api-quote").innerHTML = "Error fetching anime quote."
  }
}


getAnimeQuote("https://animechan.vercel.app/api/random")