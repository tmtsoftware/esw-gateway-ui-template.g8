# $project_name$

## Prerequisite until we publish esw-ts to npm
```
 > cd ~/projects/esw-ts/lib
 > npm run build
```

## link the above esw-ts build to the newly created webapp using g8
```
> g8 tmtsoftware/esw-ui-template.g8 --project_name=demo-app
> cd demo-app
> npm link <path-to-local-esw-ts-library> (/~/projects/esw-ts/lib)
```


## Steps to start App in local environment
```
 > npm install

 > npm start
```
