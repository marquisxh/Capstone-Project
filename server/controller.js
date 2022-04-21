
let players = []
// const teams = require('https://www.balldontlie.io/api/v1/teams')
// const newPlayer = require('https://www.balldontlie.io/api/v1/players/<ID>')
// const newTeam = require('https://www.balldontlie.io/api/v1/teams/<ID>')


module.exports = {

    getAllPlayers: (req, res) => {
        axios.get('https://www.balldontlie.io/api/v1/players')
        .then(res => players = res.data)
        res.status(200).send(players)   
    },

    getPlayer: (req, res) => {
        let player = players.find(player => player.id === +req.params.id)
        res.status(200).send(player)
    },
    
    deletePlayer: (req, res) => {
        let index = players.findIndex(player => player.id === +req.params.id)
        players.splice(index, 1)
        res.status(200).send(players)
    },

    addPlayer: (req, res) => {        
    players.push(newPlayer)
    res.status(200).send(players)
    console.log(players)
},

    getAllTeams: (req, res) => {
    res.status(200).send(teams)   
    },

    deleteTeam: (req, res) => {
        let index = teams.findIndex(team => team.id === +req.params.id)
        teams.splice(index, 1)
        res.status(200).send(teams)
    },

    addTeam: (req, res) => {        
        teams.push(newTeam)
        res.status(200).send(teams)
        console.log(teams)
    },

}
