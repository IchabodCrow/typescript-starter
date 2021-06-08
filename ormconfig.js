module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities:
    process.env.NODE_ENV === 'test'
      ? ['src/**/*.entity.js']
      : ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: true,
  migrations: ['dist/db/migrations/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
};
