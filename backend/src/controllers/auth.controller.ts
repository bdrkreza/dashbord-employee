import { NextFunction, Request, Response } from "express";
import { AuthUser } from "../models";
import createJWTToken from "../utils/generateToken";

const AuthCrl = {
  register: (req: Request, res: Response, next: NextFunction) => {
    AuthUser.find({ email: req.body.email })
      .exec()
      .then((user) => {
        if (user.length >= 1) {
          return res.status(409).json({
            message: "Mail Already exists",
          });
        } else {
          const user = new AuthUser({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
          });
          user
            .save()
            .then((result) => {
              console.log(result);
              const userToken = {
                username: result.username,
                email: result.email,
                phone: result.phone,
                role: result.role,
                _id: result._id,
              };
              const token = createJWTToken(userToken);
              return res.status(201).json({
                message: "User created",
                token: token,
              });
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json({
                error: err,
              });
            });
        }
      });
  },

  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const user = await AuthUser.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "No user with this email!" });
      }

      const isValidPassword = await user.isValidPassword(password);
      if (!isValidPassword) {
        return res
          .status(400)
          .json({ message: "Incorrect email or password!" });
      }
      const payload = {
        _id: user._id,
        username: user.username,
        phone: user.phone,
        email: user.email,
        role: user.role,
      };
      const access_token = createJWTToken(payload);
      return res.json({ success: true, token: access_token, error: false });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },
};

export default AuthCrl;
