import express from 'express';

// creating a router object by calling the router function on express
const router = express.Router();

router.get('/', (req, res) => {
	res.send({data: []});
});

export default router;