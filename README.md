# Pierre-Etienne Soury Application for Join

To start the project, you have to install dependencies:

```sh
cd frontend && npm i
cd backend && npm i
```

Then you can build the image and run it:

```sh
docker-compose build
docker-compose up
```

Finally you have to populate the DB:

```sh
node ./backend/seed.js
```
