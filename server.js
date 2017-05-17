//to import a non default export
//use the destruct syntax
// import config, { nodeEnv } from './config';

import express from 'express';
const server = express();


//node will automatically attach the req,res argument 
//to the http request event
const server = http.createServer(config.port (req, res) => {
	res.write('Hello HTTP!\n');
	setTimeout(() => {
		//writing to the response stream
		res.write('I can stream!\n');
		res.end();
	}, 3000);
});



// //the request event is emitted every time the server sees the request
// server.on('request', (req, res) => {
// 	res.write('Hello HTTP!\n');
// 	setTimeout(() => {
// 		//writing to the response stream
// 		res.write('I can stream!\n');
// 		res.end();
// 	}, 3000);
// });