const client = require("socket.io-client")("http://0.0.0.0:8010");
const name = "RELOADER";

let room = process.argv[2];

client.on("connect", function()
{
	console.log(name, client.id, "connected");
	console.log(name, client.id, "emitting reload");
	client.emit("reload", room);
	console.log(name, client.id, "closing..");
	client.close("I'm done!");
});
