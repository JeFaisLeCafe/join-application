const { Seeder } = require("mongo-seeding");
const { ServerModel, RoomModel } = require("./models");
const mongoose = require("mongoose");

const config = {
  database: "mongodb://localhost:27017/join-test",
  dropDatabase: true
};

const seeder = new Seeder(config);

const seedUsers = [
  {
    username: "pierre",
    password: "@join"
  },
  {
    username: "loic",
    password: "@join"
  },
  { username: "benjamin", password: "@join" },
  { username: "yuliia", password: "@home" }
];

const seedRooms = [
  {
    name: "the great team"
  }
];

const seedServers = [
  {
    name: "Gamezone"
  }
];

const save = async () => {
  try {
    await seeder.import([{ name: "users", documents: seedUsers }]);
    await seeder.import([{ name: "rooms", documents: seedRooms }]);
    await seeder.import([{ name: "servers", documents: seedServers }]);

    // await mongoose.connect(
    //   "mongodb://host.docker.internal:27017/join-test",
    //   {}
    // );

    // const rooms = await RoomModel.findOne();
    // const server = await ServerModel.findOne({ name: "Gamezone" });

    // server.rooms = rooms;

    // server.save();
  } catch (e) {
    console.error(e);
  }
};

save();
