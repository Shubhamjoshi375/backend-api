// src/controllers/userController.js
const userService = require('../services/userService');
const { userResponseDto } = require('../dtos/userDto');
const { validateUser } = require('../validators/userValidator');

const getUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users.map(userResponseDto));
};

const getUser = async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (user) {
    res.json(userResponseDto(user));
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

const createUser = async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const user = await userService.createUser(req.body);
  res.status(201).json(userResponseDto(user));
};

const updateUser = async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const user = await userService.updateUser(req.params.userId, req.body);
  if (user) {
    res.json(userResponseDto(user));
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

const patchUser = async (req, res) => {
  const user = await userService.updateUser(req.params.userId, req.body);
  if (user) {
    res.json(userResponseDto(user));
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

const deleteUser = async (req, res) => {
  const user = await userService.deleteUser(req.params.userId);
  if (user) {
    res.json({ message: 'User deleted' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  patchUser,
  deleteUser,
};
