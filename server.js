const net = require('net');

const server = net.createServer(function(c){
	// 'connection' listener
	console.log('client connected');
	c.on('end', function(){
		console.log('client disconnected');
	});
	c.on('data',function(data){
		console.log(data.toString());
	});
	//c.write('hello from server\r\n');
	//c.pipe(c);
	//This is change for commit.
}).listen(6969);



























































// server.on('data', function(){
	// Console.log("Hello"); 
// });

// server.on('error', function(err){
	// throw err;
// });

// server.listen(6969, function() {
	// console.log('server bound');
// });



// var app=require('http').createServer()
// var io=require('socket.io')(app)



// app.listen(6969)

// io.on("connection",function(socket){
	
	// socket.emit("msg","This is message from server")
	
	// socket.on("data",function(data){
		// console.log(data)
	// })
// })





// var net = require('net');
 
// var HOST = '127.0.0.1'; 
// var PORT = 6969; 

// net.createServer(function(sock) { 
	// console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort); 
	// sock.on("data", function(data) { 
		// console.log(data.toString());
		// //sock.write(data); 
	// }); 
	// sock.on('close', function(data) { 
		// console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort); 
	// }); 
// }).listen(PORT, HOST);
 
// console.log('Server listening on ' + HOST +':'+ PORT);

