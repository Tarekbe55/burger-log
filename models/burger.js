const orm = require("../config/orm");

const burger = {

  all(cb) {
    orm.selectAll("burgers", (res) => cb(res));
  },

  create(data, cb) {
    orm.insertOne("burgers", data, (res) => cb(res));
  },

  update(data, id, cb) {
    orm.updateOne("burgers", data, "id", id, (res) => cb(res));
  }
}

module.exports = burger;