const express = require('express')
const cors = require('cors')
const { getAllPlayers, deletePlayer, getPlayer, getAllTeams, deleteTeam, addTeam } = require('./controller')




const app = express()

app.use(express.json())
app.use(cors())



// endpoints
app.get('/api/v1/players', getAllPlayers)
app.get('/api/v1/teams', getAllTeams)
app.delete('/api/v1/players/<ID>', deletePlayer)
app.delete('https://www.balldontlie.io/api/v1/teams/<ID>', deleteTeam)
app.get('https://www.balldontlie.io/api/v1/players/<ID>', getPlayer)
app.post('https://www.balldontlie.io/api/v1/teams/<ID>', addTeam)














app.listen(5500, () => console.log(`Server listening on 5500`))