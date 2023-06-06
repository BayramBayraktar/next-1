import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    }
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;