import { Request } from "express";
import multer from "multer";
import path from "path";
type FileNameCallback = (error: Error | null, filename: string) => void;

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (
    req: Request,
    file: Express.Multer.File,
    callback: FileNameCallback
  ): void => {
    const extName = path.extname(file.originalname);
    const uniqueName =
      file.originalname
        .replace(extName, "")
        .toLowerCase()
        .split(" ")
        .join("-") + "-";
    const fileName = `${uniqueName}${extName}`;

    callback(null, fileName);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1000000,
  },
  fileFilter: (
    request: Request,
    file: Express.Multer.File,
    callback: any
  ): void => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/gif"
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not a image File!!"), false);
    }
  },
});

export default upload;
