const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Simulate authentication (replace with your authentication logic)
    if (isValidUser(username, password)) {
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

function isValidUser(username, password) {
    // Replace with your actual authentication logic (e.g., check against a database)
    return (username === 'user@example.com' || username === '+1234567890') && password === 'password';
}

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
