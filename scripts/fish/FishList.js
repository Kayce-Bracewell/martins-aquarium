import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish_card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name"><b>Name: </b>${fish.name}</div>
            <div class="fish__species"><b>Species: </b>${fish.species}</div>
            <div class="fish__length"><b>Length: </b>${fish.length}</div>
            <div class="fish__location"><b>Location: </b>${fish.location}</div>
            <div class="fish__diet"><b>Food: </b>${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}