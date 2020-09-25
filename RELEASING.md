# Releasing

Steps to release:

1. Change `esw-ts` version in `src/main/g8/default.properties` and `README.md`
2. Make sure `dev` workflow is green in actions tab in github repo
3. update `release.yml`
    Update step `create new project from esw-ui-template.g8 template with specified version` in `release.yml`
    Update `<****>` in `g8 tmtsoftware/esw-ui-template.g8 --tag <****> --name=ui-app` with `esw-ui-template.g8 version` that you are going to release
    
    For example, if you are going to release `v3.0.0` of `esw-ui-template.g8`
    then updated line in `release.yml` will look like `g8 tmtsoftware/esw-ui-template.g8 --tag v3.0.0 --name=ui-app`
        
4. Run ./release.sh <VERSION> script by providing version number argument
    **Note:** `PROD=true` environment variable needs to be set before running `release.sh`

5. Tagging csw.g8 will trigger `release` workflow in github actions tab. Make sure that `release` workflow is green.
