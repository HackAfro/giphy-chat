require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');

const app = express();
const port = process.env.PORT || 5000;
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: 'eu',
  encrypted: true,
});
const getGifs = require('./giphy');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(( req, res, next ) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});


app.post('/messages', async ( req, res ) => {
  const { body } = req;
  const { text, id } = body;
  const messageArray = text.split(' ');
  const [ giphy, ...rest ] = messageArray;

  if ( giphy === 'giphy' ) {
    const text = rest.join(' ');

    getGifs(text).then(( { data } ) => {
      const { images: { fixed_width } } = data;
      const body = {
        messageType: 'gif',
        gif: {
          ...fixed_width
        },
        id,
        timeStamp: new Date()
      };

      pusher.trigger('chat', 'message', body);
      res.json(body);

    }, ( err ) => {
      const data = {
        messageType: 'text',
        text,
        id,
        timeStamp: new Date(),
      };

      pusher.trigger('chat', 'message', data);
      res.json(data);
    });
  } else {
    const data = {
      messageType: 'text',
      text,
      id,
      timeStamp: new Date(),
    };

    pusher.trigger('chat', 'message', data);
    res.json(data);
  }


});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
