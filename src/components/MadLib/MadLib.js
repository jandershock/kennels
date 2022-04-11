import { useEffect, useState } from "react"

export const MadLib = () => {
    const [madLibrary, setMadLibrary] = useState({});


    useEffect(() => {
        setMadLibrary({
            pluralNoun1: "unicorns",
            adjective1: "pretty",
            noun: "street",
            typeOfFood: "mexican",
            articleOfClothing: "dickey",
            verbEndingIning: "wallowing",
            pluralNoun2: "trees",
            pluralNoun3: "lasers",
            numberVal: "113",
            celebrity: "Taylor Swift",
            color: "golden rod",
            verbEndingIning2: "licking",
            typeOfFood: "Italian sweets",
            pluralNoun: "concrete shoes",
            adjective2: "gloomy",
            adjective3: "claustrophobic"
        })
    }, [])

    return (
        <>
            <p>{`Would it surprise you to learn that the most majestic ${madLibrary.pluralNoun} in the world eat garbage? Well, they do! Everything from ${madLibrary.adjective1} soda cans to ${madLibrary.noun}-stained ${madLibrary.typeOfFood} boxes to used ${madLibrary.articleOfClothing} - and more! Some have been spotted ${madLibrary.verbEndingIning} dumpsters and then using their long ${madLibrary.pluralNoun1} to spear as many bags of ${madLibrary.pluralNoun2} as they can before being caught. According to an interview with the ${madLibrary.numberVal} Minutes News, ${madLibrary.celebrity} once came home to find a/an ${madLibrary.color} unicorn ${madLibrary.verbEndingIning2} up in the recycling bin. The poor thing had mistaken leftover ${madLibrary.typeOfFood} for dried up ${madLibrary.pluralNoun3}. "It was a/an ${madLibrary.adjective2} mistake. I am a good cook!"`}</p>
        </>
    )
}