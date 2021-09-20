# Releasing

Steps to release:

1. Change `esw-ts` version in `package.json`
2. Commit and push changes to `dev` branch
3. Make sure `dev` workflow is green in actions tab in github repo
4. Rebase dev branch with master branch
5. Merge dev branch to master branch using PR
6. Make sure workflow is green in actions tab in github repo for master branch
7. Run ./release.sh `<VERSION>`script by providing version number argument
    **Note:** `PROD=true` environment variable needs to be set before running `release.sh`
8. Tagging esw-gateway-ui-template.g8 will trigger `release` workflow in github actions tab. Make sure that `release` workflow is green
   
After release, follow `RELEASING.md` of `esw-gateway-ui-example`
