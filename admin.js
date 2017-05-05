const client = require("socket.io-client")("http://0.0.0.0:8010");
const room = "admin";
const name = "ADMIN";

client.on("connect", function()
{
	console.log(name, "connected");
	console.log(name, "joining", room);
	client.emit("room", room);

	client.on("reload", function()
	{
		console.log(name, "reload");
	});
});

client.on("disconnect", function()
{
	console.log(name, "disconnected");
	client.off("bump");
});
