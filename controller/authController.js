// Auth controller
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Institution } = require("../models");
const jwtDecode = require("jwt-decode");

// Register account
const register = async (req, res) => {
  const { institutionId, name, email, password, role } = req.body;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    const isEmailRegistered = await User.findOne({
      where: {
        email: email,
      },
    });
    if (isEmailRegistered) {
      res.status(409);
      return res.json({
        status: 409,
        message: "Email already exist!",
      });
    }

    await User.create({
      institutionId,
      name,
      email,
      role,
      password: hashPassword,
    });
    res.status(201).json({
      message: "Register success",
    });
  } catch (error) {
    console.log(error);
  }
};

// Login account
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userInfo = await isEmailRegistered(email);
    const passwordMatch = await bcrypt.compare(password, userInfo.password);

    if (!passwordMatch) {
      res.status(401).json({
        statusCode: 401,
        message: "Email or Password doesnt match!",
      });
    } else {
      const user = { id: userInfo.id, email: userInfo.email, role: userInfo.role };

      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });

      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.status(200).json({
        statusCode: 200,
        message: "Login success!",
        accessToken: accessToken,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// Logout
const logout = async (req, res) => {
  try {
    res.clearCookie("accessToken");
    res.status(200).json({
      message: "terserah",
    });
  } catch (error) {
    console.log(error);
  }
};

// Check email
const isEmailRegistered = (value) => {
  return User.findOne({
    where: {
      email: value,
    },
  });
};

// Get all data user
const getAdmin = async (req, res) => {
  try {
    const admin = await User.findAll({
      where: {
        role: "admin",
      },
    });
    res.status(200).json({
      message: "Success get all admin",
      data: admin,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get data user by id
const getAdminById = async (req, res) => {
  const userId = req.params.id;
  try {
    const admin = await User.findOne({
      where: {
        id: userId,
      },
    });
    res.status(200).json({
      message: "Success get detail",
      statusCode: 200,
      data: admin,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

// Edit data user
const updateAdmin = async (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;

  try {
    const admin = await User.findOne({
      where: { id: userId },
    });
    await admin.update({
      name,
      email,
      password,
    });
    res.status(200).json({
      message: "Success update admin",
      statusCode: 200,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

// Delete data user
const deleteAdmin = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.destroy({
      where: { id: userId },
    });
    res.status(204).end();
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

// Read data institution
const getInstitution = async (req, res) => {
  try {
    const institution = await Institution.findOne({
      include: {
        model: User,
        required: true,
        where: {
          id: req.params.id,
        },
      },
    });
    res.status(200).json({
      message: "terserah",
      data: institution,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register, login, logout, getInstitution, getAdmin, updateAdmin, deleteAdmin, getAdminById };
