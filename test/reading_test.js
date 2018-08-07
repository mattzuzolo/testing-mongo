const assert = require("assert");
const User = require("../src/user");

describe("Readings users out of db", () = {

  let joe;

  beforeEach(() => {
    joe = new User({ name: "Joe"}); //dont declare here so that available in it blocks
    joe.save()
      .then(() => done());
  });

  it("finds all users with a name of joe", () => {
    User.find({ name: "Joe" })
      .then((usersArray) => {
        assert(users[0]._id.toString() === joe._id.toString());

        done();
      });
  });

  it("find a user with a particular id", (done) => {
    User.findOne({ _id: joe._id })
  })
});
