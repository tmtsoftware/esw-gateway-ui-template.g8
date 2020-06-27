# $project_name$

## Before running
update esw-ts, react, react-dom path in package.json before npm install

```package.json
{
   dependencies : {
       "esw-ts": "<local-path-to-esw-ts>/lib",
       "react": "<local-path-to-esw-ts>/lib/node_modules/react",
       "react-dom": "<local-path-to-esw-ts>/lib/node_modules/react-dom"
   } 
}
```
## To run locally 
`npm start`
