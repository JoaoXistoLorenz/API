
## Rodar Server
* npm run dev

## Rodar container postgres docker
* docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
* docker start postgres
* docker stop postgres

## Rodar migrations
* npm run typeorm

## Criar Migration
npx typeorm migration:create -n 'Nome da migration ex: CreateUsers'

## Rodar Migration
npm run typeorm migration:run
