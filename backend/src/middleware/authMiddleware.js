import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {

  try {

    console.log("AUTH HEADER:", req.headers.authorization);

    const authHeader =
      req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "No token provided"
      });
    }

    const token =
      authHeader.split(" ")[1];

    console.log("TOKEN:", token);

    const decoded =
      jwt.verify(
        token,
        "certifyhubsecret"
      );

    req.organizerId =
      decoded.id;

    next();

  } catch (error) {

    console.log(error);

    res.status(401).json({
      message: error.message
    });

  }
};

export default authMiddleware;