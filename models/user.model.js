import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "username is required"],
      minlength: 1,
      maxlength: 50,
    },
    email: {
      type: String,
      required: [true, "useremail is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "User password is required"],
      minlength: 6,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);
export default User;
