const productConfig = {
  mysql: {
    port: 3306,
    host: '数据库地址',
    user: '用户名',
    password: '密码',
    database: 'test', 
  },
};

const localConfig = {
  mysql: {
    port: 3306,
    host: 'localhost',
    user: 'admin',
    password: '000000',
    database: 'test',
  },
};

const config = process.env.NODE_ENV ? productConfig : localConfig;

export default config;