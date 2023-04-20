import jwt from "jsonwebtoken";
import User from "./src/models/user";

export const checkPermission = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({
        message: "You need to login",
      });
    }

    const token = req.headers.authorization.split(" ")[1];
    const { id } = jwt.verify(token, "123456");
    const user = await User.findById(id);
    if (!user && user.role !== "admin") {
      return res.status(401).json({
        message: "You do not have permission",
      });
    }
    req.user = user;
    next();
  } catch (error) {}
};
