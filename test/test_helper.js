const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

//only runs once before ALL TESTs
before(() => {
  mongoose.connect("mongodb://localhost/users_test")
  mongoose.connection
    .once("open", () => console.log("Good to go!"))
    .on("error", (error) => {
      console.warn("Warning", error);
    })
});

//runs before EACH TEST
beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    //ready to run next text
    done();
  });
})
