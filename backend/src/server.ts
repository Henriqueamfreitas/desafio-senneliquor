import app from "./app";
import { AppDataSource } from "./database";
import 'reflect-metadata';
import { User } from './entities/User.entity';
import * as bcrypt from 'bcryptjs';

async function createUser() {
  const userRepository = AppDataSource.getRepository(User);

  const existingUser = await userRepository.findOne({ where: { username: 'admin' } });

  if (!existingUser) {
    const hashedPassword = await bcrypt.hash("admin123", 10);
    const user = new User();
    user.username = 'admin';
    user.password = hashedPassword;

    await userRepository.save(user);
    console.log('Admin user created');
  } else {
    console.log('Admin user already exists');
  }
}

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connected");

    await createUser();

    const PORT: number = Number(process.env.PORT || 3000);
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((error) => console.error('Error connecting to the database:', error));