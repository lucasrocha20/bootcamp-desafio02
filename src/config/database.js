module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'meetapp',
  define: {
    timestamps: true, // created_at and updated_at
    underscored: true, // não utiliza o padrão camel case
    underscoredAll: true,
  },
};
