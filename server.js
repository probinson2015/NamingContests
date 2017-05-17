import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.get('/', (req, res) => {
	res.send('express loaded on get homepage');
});

// server.use mounts middleware functions at the specified path
server.use('/api', apiRouter);

// express.static is the only built in middleware in express
// It serves static files
server.use(express.static('public'));

// sending html via fs module and toString()
// import fs from 'fs'; 
// server.get('/about.html', (req, res) => {
// 	fs.readFile('./about.html', (err, data) => {
// 		res.send(data.toString());
// 	});
// });

server.listen(config.port, () => {
	console.info('Server listening on port: ', config.port);
});