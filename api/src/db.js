require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

// const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/hotel`,
//   {
//     logging: false,
//     native: false,
//   }
// );

// const sequelize = new Sequelize(DB_DEPLOY, {
//   logging: false,
//   native: false,
// });
const local = "postgres://postgres:password@localhost:5432/booking";
const supabase = "postgresql://postgres.bzzcjbjgxaojvxlybgyp:cvp30databaseprojects@aws-0-us-west-1.pooler.supabase.com:6543/postgres";
const sequelize = new Sequelize(supabase, {
  logging: false,
  native: false,
})

const basename = path.basename(__filename);

const modelDefiners = [];
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });
modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Hotel, Room, Reservation, User, Commentary } = sequelize.models;

Reservation.belongsTo(User);
Reservation.belongsTo(Room);

User.belongsToMany(Hotel, { through: Commentary, timestamps: false });
Hotel.belongsToMany(User, { through: Commentary, timestamps: false });

User.belongsToMany(Hotel, { through: "Favorites", timestamps: false });
Hotel.belongsToMany(User, { through: "Favorites", timestamps: false });

Hotel.hasMany(Room, { as: "showRooms", foreignKey: "hotelId" });
Room.belongsTo(Hotel);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
