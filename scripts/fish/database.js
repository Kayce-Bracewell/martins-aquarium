/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {   
            image: "https://aquaticsunlimited.com/wp-content/uploads/2023/07/shutterstock_2004895175DONE.jpg",
            name: "Bart",
            species: "Pterophyllum scalare",
            food: "invertebrates",
            length: 3,
            location: "South America"
        },
        {
            image: "https://ncfishes.com/wp-content/uploads/2021/09/Lepomis-macrochirus.png",
            name: "Steve",
            species: "Lepomis macrochirus",
            food: "algae",
            length: 2,
            location: "North America"
        },
        {
            image: "https://media.istockphoto.com/id/495907882/photo/common-octopus.jpg?s=612x612&w=0&k=20&c=NCJ83MXzTgdwCr3Lbjwc7R-b182bZmBvzNh39Sj0tlM=",
            name: "Salacious",
            species: "Octopoda",
            food: "Crab",
            length: 15,
            location: "Ocean"
        },
        {
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Crab-body-7f9ae78.jpg?quality=90&resize=556,505",
            name: "Mr.",
            species: "Portunus pelagicus",
            food: "Clam",
            length: 9,
            location: "Ocean"
        }
    ],
    care: [
        {
            water:"Salt",
            light:"Dark",
            tips:"Be nice to your fish1"
        },
        {
            water:"Fresh",
            light:"Light",
            tips:"Be nice to your fish2"
        },
        {
            water:"Salt",
            light:"Dark",
            tips:"Be nice to your fish3"
        },
        {
            water:"Salt",
            light:"Dark",
            tips:"Be nice to your fish4"
        }
    ],
    location: [
        {
            id: 1,
            image: "https://okeechobeefishingguide.com/wp-content/uploads/2018/09/lake_Okeech.jpg",
            place: "Lake Okeechobee"
        },
        {
            id: 2,
            image: "https://a-z-animals.com/media/2022/04/iStock-1381471577-1024x614.jpg",
            place: "Lake Kissimmee"
        },
        {
            id: 3,
            image: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSDzN3C_YAXPjyXzAHdvLPs9v_7Ds9PDW1SzHp9vdGASj0W7ZwtiseE2Tg5YkLOoKLa",
            place: "Florida Keys"
        },
        {
            id: 4,
            image: "https://a-z-animals.com/media/2022/04/1280px-Alligator_Lake_07-1024x682.jpg",
            place: "Lake Istokpoga"
        },
    ]
}

const ourFishArray = database.fish
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (let fish of ourFishArray) {
        if (fish.length % 3 == 0) {
            holyFish.push(fish)
        }
    }
    console.log(holyFish)
    return holyFish
}
mostHolyFish()

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (let fish of ourFishArray) {
        if (fish.length % 5 == 0) {
            soldiers.push(fish)
        }
    }
    console.log(soldiers)
    return soldiers
}
soldierFish()
export const nonHolyFish = () => {
    const regularFish = []

    for (let fish of ourFishArray) {
        if (fish.length % 3 !== 0 && fish.length % 5 !==0) {
            regularFish.push(fish)
        }
    }
    // Any fish not a multiple of 3 or 5
    console.log(regularFish)
    return regularFish
}
nonHolyFish()

/*
module.exports = {
    database
}
*/

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
};

export const getCare = () => {
    return database.care.map(care => ({...care}))
};

export const getLocations = () => {
    return database.location.map(location => ({...location}))
};

