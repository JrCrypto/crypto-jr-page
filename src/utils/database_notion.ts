require('dotenv').config();

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.NOTION_DATABASE_ID;

//requisicao ao notion API
(async() => {
  const response = await notion.databases.query({ 
    database_id: databaseId,
         
  });
  
  //console.log(response.properties.LinkedIn.url);
  //console.log(response.title)
  //console.log(response);
  //console.log(response.results[1].properties.LinkedIn.url);
  console.log(response.results[1].properties.Member.title.text.content);
  // Object.entries(JSON.stringify(objUrl)).forEach(([response, url]) => {
  //   console.log(`${response}: ${url}`);
  //});

})();