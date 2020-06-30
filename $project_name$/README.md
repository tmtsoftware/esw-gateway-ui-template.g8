# $project_name$

## Prerequisite until we publish esw-ts to npm
```
 $> cd ~/projects/esw-ts/lib
 $> npm run build
```

## link the above esw-ts build library to the newly created webapp using g8
```
$> g8 tmtsoftware/esw-ui-template.g8
$> cd project-name
$> npm link <path-to-local-esw-ts-library> (/~/projects/esw-ts/lib)
```


## Steps to run in local environment
```
 $> npm install

 $> npm start
```
