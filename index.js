const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.Port || 5000;


const courses = require('./data.json');

app.get('/', (req, res) => {
	res.send('server is running');
});

app.get('/courses', (req, res)=>{
    res.send(courses)
})
app.get('/course/:id', (req, res) => {
	const id = req.params.id;
	const course = courses.find(p => p.id == id);
	res.send(course);
});
app.listen(port, () => {
    console.log(`server is running on port ${port}` );
})

