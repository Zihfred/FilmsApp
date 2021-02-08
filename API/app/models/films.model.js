module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      release: Number,
      format: String,
      stars: Array
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model("film", schema);
};



