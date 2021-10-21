const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 7000;

app.get('/', (req, res) => {
    res.send('I am learning Express.js from yesterday');
})
const users = [
    { id: 0, name: "Hasina", email: 'Haisna@gmmail.com', phone: '01568963258', address: 'BD' },
    { id: 1, name: "Shabana", email: 'Shabana@gmmail.com', phone: '01568963258', address: 'BD' },
    { id: 2, name: "Urbasi", email: 'Urbasi@gmmail.com', phone: '9986564564', address: 'IND' },
    { id: 3, name: "Yash", email: 'Yash@gmmail.com', phone: '5465478678', address: 'IND' },
    { id: 4, name: "Tom Cruise", email: 'tom@yahoo.com', phone: '998855999966', address: 'USA' }
]

//Fetch data get
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const result = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(result);
    } else {
        res.send(users);
    }

});

//app.Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the pos', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

//Dynamic URL
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})
app.listen(port, () => {
    console.log('Running port', port);
});