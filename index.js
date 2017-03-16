var builder = require("botbuilder");
var restify = require("restify");

//db with alle the events/professors/equipment
var db = require("./db");
var events;

var server = restify.createServer();
server.listen(3978, function () {
    console.log("The server is running!");
})

var connector = new builder.ChatConnector({
    appId: null,
    appPassword: null
})

server.post("/api/messages", connector.listen());

var bot = new builder.UniversalBot(connector);
var recognizer = new builder.LuisRecognizer("LUIS URL");
var intents = new builder.IntentDialog({
    //recognizers: [recognizer]
});

//Bind the intents to the root
bot.dialog("/", intents);

//The simplest intent possible (RegEx)
intents.matches(/^hello/i, function (session) {
    session.send("Hello world!");
})

//Chaining functions to define a dialog
intents.matches(/^setname/i, [
    function (session, result) {
        builder.Prompts.text(session, "What is your name?");
    },
    function (session, result) {
        //Set session name
        session.userData.name = result.response;
        session.endDialog("Hi " + result.response + "! I saved your name in session.userData.name (type getname to show your name)");
    }
]);

//Get name from session.userData
intents.matches(/^getname/i, "/GetName");

//Globally registered dialog
bot.dialog("/GetName", function (session) {
    session.endDialog("Your name is " + session.userData.name);
})


