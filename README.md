# sls-typescript-starter
Lightweight starter template for using Serverless with Typescript 

## Getting started
```
sls create --name YOUR_PROJECT_NAME --template-url https://github.com/joshbedo/sls-typescript-starter
cd YOUR_PROJECT_NAME
npm i
```

You're ready to go!

## Useful commands
```
sls deploy -v // deploy whole stack with verbose messaging
sls remove // delete whole stack
sls invoke -f FUNCTION_NAME -l // invoke function and output logs
sls deploy -f FUNCTION_NAME // deploy single lambda function instead of whole stack
sls logs -f FUNCTION_NAME -t // get logs from function's cloudwatch group. You can also add -t to tail logs in realtime.
``` 