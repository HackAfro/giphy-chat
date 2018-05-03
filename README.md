## Giphy Chat
Get a gif when the `giphy` command is sent as a suffix for ensuing message

## Getting Started

- Clone the repository
- cd into `giphy-chat` 
- Create a file called `env` and update it like so
```
PUSHER_APP_ID=APP_ID
PUSHER_KEY=PUSHER_KEY
PUSHER_SECRET=PUSHER_SECRET
GIPHY_KEY=KEY

```
- Visit [https://developers.giphy.com/dashboard/](Giphy's) developer's portal and get a `client_key`.
- Visit [https://dashboard.pusher.com/](Pusher's) dashboard and create a channels app. Copy your `app_id`, `pusher_key` and `pusher_secret`.
- Replace the placeholder values above with your respective keys
- Run `npm install && npm start`

## How to use

To send a gif, start your message with the word `giphy`.
