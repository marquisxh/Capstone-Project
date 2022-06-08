const form = document.querySelector('form')
const firstPlayer = document.querySelector('#player-1')
const secondPlayer = document.querySelector('#player-2')
const thirdPlayer = document.querySelector('#player-3')
const teamPick = document.querySelector('#team-1')



const baseURL = `https://www.balldontlie.io/api/v1/players`
const baseTeamsURL = `'https://www.balldontlie.io/api/v1/teams'`
const playerURL = `https://www.balldontlie.io/api/v1/players/<ID>`
const teamUrl = `https://www.balldontlie.io/api/v1/teams/<ID>`

const playersCallback = ({ baseURL }) => displayplayers(baseURL)
const onePlayerCallback = ({ playerURL }) => displayOneplayers(playerURL)
const teamCallback = ({ teamUrl }) => displayTeam(teamUrl)
const allTeamsCallback = ({ baseTeamsURL }) => displayAllTeams(baseTeamsURL)
const errCallback = err => console.log(err)

const getAllPlayers = () => axios.get(baseURL).then(playersCallback).catch(errCallback)
const getAllTeams = () => axios.get(baseTeamsURL).then(allTeamsCallback).catch(errCallback)
const getPlayer = body => axios.get(playerURL, body).then(onePlayerCallback).catch(errCallback)
const deletePlayer = id => axios.delete(`${playerURL}/${id}`).then(onePlayerCallback).catch(errCallback)
const addTeam = body => axios.post(teamUrl, body).then(teamCallback).catch(errCallback)
const deleteTeam = body => axios.delete(teamUrl, body).then(teamCallback).catch(errCallback)

const playerOneButton = document.querySelector('#player-1-button')
const playerTwoButton = document.querySelector('#player-2-button')
const playerThreeButton = document.querySelector('#player-3-button')
const favTeamButton = document.querySelector('#team-1-button')
const delPlayerOneButton = document.querySelector('#player-1-button-del')
const delPlayerTwoButton = document.querySelector('#player-2-button-del')
const delPlayerThreeButton = document.querySelector('#player-3-button-del')
const delFavTeamButton = document.querySelector('#team-1-button-del')
const playerInfoOne = document.querySelector('#player-1-data')
const playerInfoTwo = document.querySelector('#player-2-data')
const playerInfoThree = document.querySelector('#player-3-data')
const favTeamInfo = document.querySelector('#fav-team-data')

const playerOneButtonClicked = () => {
const playerSearch = firstPlayer.value
    console.log('button clicked')
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerSearch}`, `https://www.balldontlie.io/api/v1/stats`)
     .then((res) =>{
         let result = "".toLowerCase()
         console.log(res.data.data[0])
         playerInfoOne.innerHTML+= `<div><strong>First Name: </strong><span>${res.data.data[0].first_name}</span></div>`
         playerInfoOne.innerHTML+= `<div><strong>Last Name: </strong><span>${res.data.data[0].last_name}</span></div>`
         playerInfoOne.innerHTML+= `<div><strong>Position: </strong><span>${res.data.data[0].position}</span></div>`
         playerInfoOne.innerHTML+= `<div><strong>Height(feet): </strong><span>${res.data.data[0].height_feet}</span></div>`
         playerInfoOne.innerHTML+= `<div><strong>Height(inches): </strong><span>${res.data.data[0].height_inches}</span></div>`
         playerInfoOne.innerHTML+= `<div><strong>Weight (pounds): </strong><span>${res.data.data[0].weight_pounds}</span></div>`
         playerInfoOne.innerHTML+= `<div><strong>Team Name: </strong><span>${res.data.data[0].team.name}</span></div>`
        
         for(let i=0; i < res.data.results; i++){
             result.push(res.data.results[i])
             let h2 =document.createElement("h2")
             h2.innerHTML= res.data.results[i].name
             document.body.appendChild(h2)
             console.log(result)
            }
     })
}

const playerTwoButtonClicked = () => {
const playerTwoSearch = secondPlayer.value
    console.log('button clicked')
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerTwoSearch}`)
    .then((res) =>{
        let result = "".toLowerCase()
        console.log(res.data.data[0])
        playerInfoTwo.innerHTML+= `<div><strong>First Name: </strong><span>${res.data.data[0].first_name}</span></div>`
        playerInfoTwo.innerHTML+= `<div><strong>Last Name: </strong><span>${res.data.data[0].last_name}</span></div>`
        playerInfoTwo.innerHTML+= `<div><strong>Position: </strong><span>${res.data.data[0].position}</span></div>`
        playerInfoTwo.innerHTML+= `<div><strong>Height(feet): </strong><span>${res.data.data[0].height_feet}</span></div>`
        playerInfoTwo.innerHTML+= `<div><strong>Height(inches): </strong><span>${res.data.data[0].height_inches}</span></div>`
        playerInfoTwo.innerHTML+= `<div><strong>Weight (pounds): </strong><span>${res.data.data[0].weight_pounds}</span></div>`
        playerInfoTwo.innerHTML+= `<div><strong>Team Name: </strong><span>${res.data.data[0].team.name}</span></div>`
        for(let i=0; i < res.data.results; i++){
            result.push(res.data.results[i])
            let h3 =document.createElement("h3")
            h3.innerHTML= res.data.results[i].name
            document.body.appendChild(h3)
            console.log(result)
            }
     })
}

const playerThreeButtonClicked = () => {
const playerThreeSearch = thirdPlayer.value
    console.log('button clicked')
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerThreeSearch}`)
    .then((res) =>{
        let result = "".toLowerCase()
        console.log(res.data.data[0])
        playerInfoThree.innerHTML+= `<div><strong>First Name: </strong><span>${res.data.data[0].first_name}</span></div>`
        playerInfoThree.innerHTML+= `<div><strong>Last Name: </strong><span>${res.data.data[0].last_name}</span></div>`
        playerInfoThree.innerHTML+= `<div><strong>Position: </strong><span>${res.data.data[0].position}</span></div>`
        playerInfoThree.innerHTML+= `<div><strong>Height(feet): </strong><span>${res.data.data[0].height_feet}</span></div>`
        playerInfoThree.innerHTML+= `<div><strong>Height(inches): </strong><span>${res.data.data[0].height_inches}</span></div>`
        playerInfoThree.innerHTML+= `<div><strong>Weight (pounds): </strong><span>${res.data.data[0].weight_pounds}</span></div>`
        playerInfoThree.innerHTML+= `<div><strong>Team Name: </strong><span>${res.data.data[0].team.name}</span></div>`
        for(let i=0; i < res.data.results; i++){
            result.push(res.data.results[i])
            let h4 =document.createElement("h4")
            h4.innerHTML= res.data.results[i].name
            document.body.appendChild(h4)
            console.log(result)
            }
     })
}
const favTeamButtonClicked = () => {
const favTeamSearch = teamPick.value
    console.log('button clicked')
    axios.get(`https://www.balldontlie.io/api/v1/teams`)
    .then((res) =>{
        let result = res.data.data.filter(team => team.full_name.toLowerCase() === favTeamSearch.toLowerCase() || team.name.toLowerCase() === favTeamSearch.toLowerCase())
        console.log(result[0])
        favTeamInfo.innerHTML+= `<div><strong>City: </strong><span>${res.data.data.filter(team => team.full_name.toLowerCase() === favTeamSearch.toLowerCase() || team.name.toLowerCase() === favTeamSearch.toLowerCase())[0].city}</span></div>`
        favTeamInfo.innerHTML+= `<div><strong>Conference: </strong><span>${res.data.data.filter(team => team.full_name.toLowerCase() === favTeamSearch.toLowerCase() || team.name.toLowerCase() === favTeamSearch.toLowerCase())[0].conference}</span></div>`
        favTeamInfo.innerHTML+= `<div><strong>Division: </strong><span>${res.data.data.filter(team => team.full_name.toLowerCase() === favTeamSearch.toLowerCase() || team.name.toLowerCase() === favTeamSearch.toLowerCase())[0].division}</span></div>`
        favTeamInfo.innerHTML+= `<div><strong>Full Name: </strong><span>${res.data.data.filter(team => team.full_name.toLowerCase() === favTeamSearch.toLowerCase() || team.name.toLowerCase() === favTeamSearch.toLowerCase())[0].full_name}</span></div>`
        for(let i=0; i < res.data.results; i++){
            result.push(res.data.results[i]) 
            h2.innerHTML= res.data.results[i].name
            document.body.appendChild(h5)
            console.log(result)
            }
     })
}

const dltPlayerOneButtonClicked = () => {
    
    playerInfoOne.innerHTML = "";

}


const dltPlayerTwoButtonClicked = () => {

    playerInfoTwo.innerHTML = "";
    
}

const dltPlayerThreeButtonClicked = () => {
    
    playerInfoThree.innerHTML = "";
}

const dltFavTeamButtonClicked = () => {
    
    favTeamInfo.innerHTML = "";
}



playerOneButton.addEventListener('click', playerOneButtonClicked)
delPlayerOneButton.addEventListener('click', dltPlayerOneButtonClicked)
playerTwoButton.addEventListener('click', playerTwoButtonClicked)
delPlayerTwoButton.addEventListener('click', dltPlayerTwoButtonClicked)
playerThreeButton.addEventListener('click', playerThreeButtonClicked)
delPlayerThreeButton.addEventListener('click', dltPlayerThreeButtonClicked)
favTeamButton.addEventListener('click', favTeamButtonClicked)
delFavTeamButton.addEventListener('click', dltFavTeamButtonClicked)