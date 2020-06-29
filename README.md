# TMT UI - Frontend template for applications

### Install Giter8 cli locally using any one of the following ways
Using Coursier 
> $> cs foundweekends/giter8 

Using Curl 
> $> curl https://raw.githubusercontent.com/foundweekends/conscript/master/setup.sh | sh

Using Brew 
> $> brew update && brew install giter8 

____
To check gitter is installed on machine. try running following command on terminal  
> g8

You should get following result 
```
 Error: Missing argument <template>
 g8 0.12.0
 Usage: g8 [options] <template>
 ```
____
Now to use esw-ui-template g8 template.

run the following command and provide appropriate values for template arguments
> g8 tmtsoftware/esw-ui-template.g8 

or you can provide arguments before hand.
> g8 [--argument_name=value] tmtsoftware/esw-ui-template.g8 

Available agruments 
* project_name
* organization
* version
* author_name

For ex: 
> g8 --project_name=SequencerUI tmtsoftware/esw-ui-template.g8

Default values will be used for remaining arguments.



