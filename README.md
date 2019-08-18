#Boiler Plate for MVP / POC apps using react
 - Can easily swap view layer to vue.js
 - Server side rendering, so we can take advantage of performance
 - No service bus / PWA features as we need rapid dev
 - UI libary evergreen is included: https://evergreen.segment.com/

#React Configs
 - Currently this app is configured with react
 - redux has been built in independently so that we can swap out the view to what ever is needed

#server
 - Node server using express
 - simple proxy set up, we will need to create util functions that add headers onto our requests
 - api file to place calls to backend services 

#scripts
 - npm run dev : starts the server
 - npm run build : builds packages 
 - npm run test : runs test cases 
 - npm run test:update : updates snapshots
 - npm run test:coverage : updates coverage 

 all above can be run using yarn also