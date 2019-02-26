# How to run this project

## External requirements
- docker
- docker-compose
- nodejs

## Setting up
1. Install the react dependencies using  
`yarn install`
1. Get the docker images  
`cd dockers`  
`docker-compose up -d`  
**Note** If the docker containers fail to run, you may have to increase your vm's max_map_count. On linux this can be done with:  
`sudo sysctl -w vm.max_map_count=262144`

## Running the application
Go to the project root
`yarn start`