var events = require("./data/events.json");
var professors = require("./data/professors.json");
var equipment = require("./data/equipment.json");

module.exports.getEvents = getEvents;
module.exports.getEquipment = getEquipment;
module.exports.getProfessors = getProfessors;


function getEvents() {
    return events;
}

function getProfessors() {
    return professors;
}

function getEquipment() {
    return equipment;
}

//It's possible to integrate these functions with a real data feed, use the following URL's for the data feed
//https://8p9dwspwld.execute-api.eu-west-1.amazonaws.com/prod/main?what=equipment
//https://8p9dwspwld.execute-api.eu-west-1.amazonaws.com/prod/main?what=events
//https://8p9dwspwld.execute-api.eu-west-1.amazonaws.com/prod/main?what=professors


