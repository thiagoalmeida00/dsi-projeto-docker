const User = require('../model/user');
const Security = require('./security_service');

const boot = async () => {
  if (await User.count() === 0) {
    let data = {name: 'Admin', email: 'admin@email.com', password: 'admin', role: 'admin'};
    data.password = await Security.encrypt(data.password);

    await User(data).save();

    data = {name: 'User', email: 'user@email.com', password: 'user', role: 'user'};
    data.password = await Security.encrypt(data.password);

    await User(data).save();
  }
};

module.exports = {
  boot
};