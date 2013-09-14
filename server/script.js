/**
 * Created with JetBrains WebStorm.
 * User: yurchehk0
 * Date: 13.09.13
 * Time: 20:47
 * To change this template use File | Settings | File Templates.
 */
var io = require('socket.io').listen(8080);

var SerialPort = require("serialport").SerialPort,
	serialPort = new SerialPort("/dev/tty.usbmodem1431", {
		baudrate: 9600,
		parity: 'none',
		stopBits: 1,
		flowControl: false
	});

io.sockets.on('connection', function (socket) {
	console.log('open serial communication');

	socket.on('message', function(){
		serialPort.write("A");
	});

});


