#/bin/bash
DATA_JSON="src/assets/data.json"
HP_CHARACTERS="src/assets/hp-characters.json"
ROUTES="src/assets/routes.json" 
JSPORT="3004"

json-server --watch $HP_CHARACTERS --routes $ROUTES --port $JSPORT &
npm start