import { getCare } from '../fish/database.mjs'

export const careTips = () => {
    const tips = getCare()

    let htmlNewString = `<article class="careSect">`

    for (const tip of tips) {
        htmlNewString += `<section class="tip_card">
            <div class="water_type"><b>Water Type: </b>${tip.water}</div>
            <div class="light_level"><b>Light Level: </b>${tip.light}</div>
            <div class="tips"><b>Tips: </b>${tip.tips}</div>
        </section>
        `
    }
    htmlNewString += `</article>`

    return htmlNewString
}