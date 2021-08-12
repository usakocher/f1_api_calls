// Get api data using parameters
const getData = async (season, round) => {
    let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`);
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
};

const getNatData = async (nationality) => {
    let flag = await axios.get('https://restcountries.eu/rest/v2/all')
    for(let i = 0; i < flag.data.length; i ++){
        if(flag.data[i].demonym == nationality){
            return flag.data[i].alpha2Code
        }
    }
}

// Defining form
let form = document.querySelector('#infoDataForm');

// Grabbing user inputs, return data, populating table
form.addEventListener('submit', async (event) => {
    event.preventDefault()
    let query_season = document.querySelector('#season');
    let query_round = document.querySelector('#round');
    let season = event.path[0][0].value;
    let round = event.path[0][1].value;
    let racer = await getData(season, round);
    for(let i = 0; i < 7; i++){
        let demonym = await getNatData(racer[i].Driver.nationality);
        let code = demonym.toLowerCase();
        let img1 = document.createElement("img");
        img1.src = `https://flagcdn.com/w20/${code}.png`;
        let sponsCode = await getNatData(racer[i].Constructors[0].nationality);
        let carCode = sponsCode.toLowerCase();
        let img2 = document.createElement("img");
        img2.src = `https://flagcdn.com/w20/${carCode}.png`;
        document.getElementById("name" + String(i+1)).innerHTML = `${racer[i].Driver.givenName} ${racer[i].Driver.familyName}`
        document.getElementById("nationality" + String(i+1)).innerHTML = `${racer[i].Driver.nationality}  `
        document.getElementById("nationality" + String(i+1)).appendChild(img1)
        document.getElementById("sponsor" + String(i+1)).innerHTML = `${racer[i].Constructors[0].name}  `
        document.getElementById("sponsor" + String(i+1)).appendChild(img2)
        document.getElementById("points" + String(i+1)).innerHTML = `${racer[i].points}`
    }
})

// Clearing table
const clearData = () => {
    for(let i = 0; i < 7; i++){
        document.getElementById("name" + String(i+1)).innerHTML = ''
        document.getElementById("nationality" + String(i+1)).innerHTML = ''
        document.getElementById("sponsor" + String(i+1)).innerHTML = ''
        document.getElementById("points" + String(i+1)).innerHTML = ''
    }  
}