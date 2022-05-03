const Spotify = require('./module')

const spotify = new Spotify()

spotify.status = spotify.rgb = spotify.setFeedbackDefinitions = spotify.setVariableDefinitions = spotify.checkFeedbacks = spotify.setVariable = () => {}

spotify.config = require('dotenv').config().parsed

spotify.init()
