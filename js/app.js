/**
 * Created with JetBrains WebStorm.
 * User: yurchehk0
 * Date: 14.09.13
 * Time: 11:04
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function() {
	var socket = io.connect('http://192.168.1.109:8080');

	$('#toggleLight').on('click', function(){
		socket.emit('message');
		console.log('Message send!')
	});

})
