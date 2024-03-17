import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> => {
      console.log('databaase => ', process.env.DATABASE);
      return await mongoose.connect(
        `mongodb://localhost/${process.env.DATABASE}`,
      );
    },
  },
];
