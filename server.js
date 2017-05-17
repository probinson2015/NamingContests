import config from './config';

import express from 'express';
const server = express();

server.get('/', (req, res) => {
	res.send('express loaded on get homepage');
});

server.listen(config.port, () => {
	console.info('Server listening on port: ', config.port);
});