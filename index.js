const express = require('express')
const cors = require('cors');
const app = express();
const port = 2200;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello I am exited learning node hello')

})


const users = [
    {
        id: 0, name: 'Shahinur',
        email: 'Shahinur02345@gmail.com',
        phone: '01332523253'
    },
    {
        id: 1, name: 'Shabnur',
        email: 'Shabnur02345@gmail.com', 
        phone: '01332523253'
    },
    {
        id: 2, name: 'Shrabonti', 
        email: 'Shrabonti02345@gmail.com',
        phone: '01332523253'
    },
    {
        id: 3, name: 'Susmita',
        email: 'Susmita02345@gmail.com', 
        phone: '01332523253'
    },
    {
        id: 4, name: 'Sonia', 
        email: 'Sonia02345@gmail.com', 
        phone: '01332523253'
    },
]

app.get('/users', (req, res)=> {
    const search = req.query.search;
    // use query parametar
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('Listening to port ', port);
})