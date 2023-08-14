import { Options } from '@mikro-orm/core';
import * as path from 'path';

const mikroOrmConfig: Options = {
  port: 3306,
  user: 'calvinho',
  host: 'localhost',
  type: 'mysql',
  dbName: 'testepsp',
  password: '1234',
  entities: ['./dist/**/*.entity,js'],
  entitiesTs: ['./src/**/*.entity,ts'],
  migrations: {
    path: path.resolve(__dirname, './src/migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
};

export default mikroOrmConfig;
