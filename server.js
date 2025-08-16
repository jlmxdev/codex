const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Replace with your MongoDB URI or environment variable
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/calendar', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/events', eventRoutes);

// Serve React build
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
