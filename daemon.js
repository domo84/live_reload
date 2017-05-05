const io = require("socket.io")(8010);
const name = "DAEMON";

io.on("connection", function(socket)
{
	console.log(name, "client", socket.id, "connected");

	socket.on("room", function(room)
	{
		console.log(name, "client", socket.id, "has joined", room);
		socket.join(room);
	});

	socket.on("reload", function(room)
	{
		socket.broadcast.to(room).emit("reload");
		console.log(name, "client", socket.id, "says reload");
	});

	socket.on("disconnect", function(reason)
	{
		console.log(name, "client", socket.id, "disconnect");
	});
});
