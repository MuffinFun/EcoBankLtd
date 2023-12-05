const express = require('express');
const app = express();
const cors = require('cors');

const usersRoute = require('./routing/users-route.js');
const cardsRoute = require('./routing/cards-route.js');
const companyRoute = require('./routing/company-route.js');

app.use(cors());
app.use(express.json());

app.use('/api/v1', usersRoute);
app.use('/api/v1', cardsRoute);
app.use('/api/v1', companyRoute);

app.listen(5000, () => {
  console.log('server has started on port 5000');
});
