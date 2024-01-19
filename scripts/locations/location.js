
import { getLocations } from '../fish/database.js'


export const renderLocations = () => {
    
    const locations = getLocations()
    let lastHtmlString = `<article class="locationSect">`

    for (const location of locations) {
        lastHtmlString += `<section class="location_card">
            <div class="image_card"><img src="${location.image}"/></div>
            <div><b>Name: </b>${location.place}</div>
        </section>
        `
    }
    lastHtmlString += `</article>`

    return lastHtmlString
}


