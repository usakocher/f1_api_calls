// Get api data using parameters
const getData = async (season, round) => {
    let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`);
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
};

// Defining form
let form = document.querySelector('#infoDataForm');

// Grabbing user inputs, return data, populating table
form.addEventListener('submit', async (event) => {
    event.preventDefault()
    let query_season = document.querySelector('#season');
    let query_round = document.querySelector('#round');
    let season = event.path[0][0].value;
    let round = event.path[0][1].value;
    let racer = await getData(season, round)
    for(let i = 0; i < 7; i++){
        document.getElementById("name" + String(i+1)).innerHTML = `${racer[i].Driver.givenName} ${racer[i].Driver.familyName}`
        document.getElementById("nationality" + String(i+1)).innerHTML = `${racer[i].Driver.nationality}`
        document.getElementById("sponsor" + String(i+1)).innerHTML = `${racer[i].Constructors[0].name}`
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