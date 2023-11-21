// Užduotis:
//
// Pasirinkite 5 pasaulio šalis. Suraskite (Google, Wikipedia) jų valstybės plotą (km²) ir gyventojų skaičių.
// Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius.
// Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.
// Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for loop arba for/of loop pagal tokį šabloną:
// Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
// Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².
// 
// Papildomai:
// Sudėkite sukoduotą skaičiavimą ir spausdinimą į funkcijos ciklą ir jį paleiskite per for loop arba for/of loop nurodydami informaciją iš masyvo.
// 
// 
// 
// Sprendimas:

var countries = [
    {country: "Kinija", area: 9596960, people: 1400000000},
    {country: "Indija", area: 3287260, people: 1300000000},
    {country: "JAV", area: 9826675, people: 331000000},
    {country: "Brazilija", area: 8515767, people: 213000000},
    {country: "Rusija", area: 17098242, people: 145000000}
]

function showCountryInfo(country) {
    var areaPerPerson = country.area / country.people * 1000000
    var peopleFormatted = country.people / 1000000

    console.log("Šalis: " + country.country + ", joje gyvena apie " + peopleFormatted.toFixed(2) + " mln. gyventojų.")
    console.log("Valstybės plotas: " + country.area + " km², plotas tenkantis vienam gyventojui: " + areaPerPerson.toFixed(2) + " m².") 
    console.log("---------------------------------------------------------------------------------")
}

for (var country of countries) {
    showCountryInfo(country)
}