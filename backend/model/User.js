const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });
// const User = mongoose.model("User", userSchema);

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
