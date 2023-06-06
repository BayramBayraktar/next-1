
import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
        await mongoose.connect("mongodb+srv://BayramBayraktar:ETd4f8EB32x74RAI@project-1.ylahirp.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        throw error;
    }
};

export default connectToDatabase;

