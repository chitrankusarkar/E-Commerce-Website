const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// Creating a database connection
mongoose.connect(
    "mongodb+srv://chitrankusarkar1:rijuriju@cluster0.cu1r9.mongodb.net/"
    )
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => console.error(error));

const app = express()

// Fetch port from process.env 
const PORT = process.env.PORT || 5000


app.use(
    cors({
        origin : 'http://localhost:5173/',
        methods : ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : ["Content-Type", 'Authorization', 'Cache-Control', 'Expires', 'Pragma'],
        credentials : true
    }
    )
)

app.use(cookieParser())
app.use(express.json())

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))