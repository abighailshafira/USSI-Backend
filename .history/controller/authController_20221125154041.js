const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const register = async (req, res) => {
  const { institutionName, name, email, password, role } = req.body;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await User.create({
      institutionName,
      name,
      email,
      password: hashPassword,
      role,
    });
    res.status(201).json({
      message: "hello register berhasil ^^!",
    });
  } catch (error) {
    console.log(error);
  }
};

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
      // const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });

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

const isEmailRegistered = (value) => {
  return User.findOne({
    where: {
      email: value,
    },
  });
};

module.exports = { register, login, logout };
