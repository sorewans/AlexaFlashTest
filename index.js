const express = require('express');
const server = express();
server.use(express.json());
const port = process.env.PORT || 5010;

server.listen(PORT, () => {
  console.log("The server is listening.")
});

server.get('/', (req, res) => {
  res.set('Content-Type', 'application/json').json(
    [
      {
          "uid": "c8f4c1ad-7a78-45ad-99f4-299efc53eb56",
          "updateDate": "2022-16-08T11:28:00.0Z",
          "titleText": "School Timetable",
          "mainText": "Today is Tuesday so you have English, Maths, Geography, CDT and science",
          "streamUrl": "",
          "redirectionUrl": ""
      }
  ]
  )
});
