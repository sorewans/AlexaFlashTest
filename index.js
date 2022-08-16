const express = require('express');
const server = express();
server.use(express.json());
const port = process.env.PORT || 5010;

server.listen(port, () => {
  console.log("The server is listening.")
});

server.get('/', (req, res) => {
  res.type('application/json').json(
    [
      {
          "uid": "c8f4c1ad-7a78-45ad-99f4-299efc53eb58",
          "updateDate": "2022-16-08T11:28:00Z",
          "titleText": "School Timetable",
          "mainText": "Today is Tuesday so you have English, Maths, Geography, CDT and science",
          "redirectionUrl": "https://bbc.co.uk"
      },
      {
        "uid": "c8f4c1ad-7a78-45ad-99f4-299efc53eb57",
        "updateDate": "2022-16-08T11:28:00Z",
        "titleText": "School Timetable",
        "mainText": "Tomorrow is Wednesday so you have gym, music, maths, english and history",
        "redirectionUrl": "https://bbc.co.uk"
    } 
  ]
  )
});
