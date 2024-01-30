import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_STRING, {
      dbName: 'LA-Crashes-2022',
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
