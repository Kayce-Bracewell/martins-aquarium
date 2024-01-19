import { getFish } from './database.js'
import { FishList } from './FishList.js'
import { careTips } from '../tips/care.js'

import { renderLocations } from '../locations/location.js'

const allFish = getFish()

const htmlReturn = FishList()

const htmlNewReturn = careTips()

const htmlFinalReturn = renderLocations()


// Import the FishList function from the correct module


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fishSection")

parentHTMLElement.innerHTML = htmlReturn

const careSection = document.querySelector(".careSection")

careSection.innerHTML = htmlNewReturn

let locationSection = document.querySelector(".locationSection")

locationSection.innerHTML = htmlFinalReturn
