
## Rodar Server
* npm run dev

## Rodar container postgres docker
* docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
* docker start postgres
* docker stop postgres

## Rodar migrations
* npm run typeorm
