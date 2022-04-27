import { Request, Response } from "express";
import fs from "fs";
import mongoose from "mongoose";
import { ClientModel } from "../models";

const clearImage = (filePath: any) => {
  fs.unlink(`./public/uploads/${filePath}`, (err: any) => console.log(err));
};

const ClientController = {
  getClient: async (req: Request, res: Response) => {
    try {
      const client = await ClientModel.find();
      res.status(200).json({
        success: true,
        error: null,
        data: client,
        message: "data request successfully",
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message,
        data: null,
        message: "database request failed!",
      });
    }
  },

  getClientByID: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };
      const client = await ClientModel.findOne({ _id: id });
      if (!client) {
        return res
          .status(404)
          .json({ message: "Client data collection not found" });
      }
      res.status(200).json({
        success: true,
        error: null,
        data: client,
        message: "data request successfully",
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message,
        data: null,
        message: "database request failed!",
      });
    }
  },

  addClient: async (req: Request, res: Response) => {
    try {
      const file = req.file?.filename || "";
      if (!file) {
        return res.send(`You must select at least 1 file.`);
      }
      const client = new ClientModel({
        ...req.body,
        image: file,
        projectId: new mongoose.Types.ObjectId(),
      });
      const newClient = await client.save();
      res.status(500).json({
        success: true,
        error: null,
        data: newClient,
        message: "data request successfully",
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message,
        data: null,
        message: "database request failed!",
      });
    }
  },

  updateClientByID: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };
      const client = await ClientModel.findOne({ _id: id });
      if (!client) {
        return res
          .status(404)
          .json({ message: "The Client with the given id was not found" });
      }

      const file = req.file?.filename || "";
      if (file) {
        clearImage(client?.image);
      }
      const updateClient = await ClientModel.findByIdAndUpdate(
        { _id: id },
        { ...req.body, image: file },
        {
          new: true,
        }
      );
      res.status(200).json({
        success: true,
        error: null,
        data: updateClient,
        message: "The Client was deleted successfully",
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message,
        data: null,
        message: "database request failed!",
      });
    }
  },

  deleteClientByID: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };
      const client = await ClientModel.findById({ _id: id });
      if (!client) {
        return res
          .status(404)
          .json({ message: "Client data collection not found" });
      }

      clearImage(client?.image);
      const deleteClient = await client?.remove();
      res.status(200).json({
        success: true,
        error: null,
        data: deleteClient,
        message: "The Client was deleted successfully",
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message,
        data: null,
        message: "database request failed!",
      });
    }
  },
};

export default ClientController;
