import { Request, Response } from "express";
import fs from "fs";
import { ProjectModel } from "../models";

const clearImage = (filePath: any) => {
  fs.unlink(`./public/uploads/${filePath}`, (err: any) => console.log(err));
};

const ProjectController = {
  getProject: async (req: Request, res: Response) => {
    try {
      const Project = await ProjectModel.find();
      res.status(200).json({
        success: true,
        error: null,
        data: Project,
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

  getProjectByID: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };
      const Project = await ProjectModel.findById({ _id: id });
      if (!Project) {
        return res
          .status(404)
          .json({ message: "Project data collection not found" });
      }
      res.status(200).json({
        success: true,
        error: null,
        data: Project,
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

  addProject: async (req: Request, res: Response) => {
    try {
      const file = req.file?.filename || "";
      const Project = new ProjectModel({
        ...req.body,
        image: file,
      });
      const newProject = await Project.save();
      res.status(500).json({
        success: true,
        error: null,
        data: newProject,
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

  updateProjectByID: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };
      const Project = await ProjectModel.findById({ _id: id });
      if (!Project) {
        return res
          .status(404)
          .json({ message: "The Project with the given id was not found" });
      }

      const file = req.file?.filename || "";
      if (file) {
        clearImage(Project?.image);
      }
      const updateProject = await ProjectModel.findByIdAndUpdate(
        { _id: id },
        { ...req.body, avatar: file },
        {
          new: true,
        }
      );
      res.status(200).json({
        success: true,
        error: null,
        data: updateProject,
        message: "The Project was deleted successfully",
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

  deleteProjectByID: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };
      const Project = await ProjectModel.findById({ _id: id });
      if (!Project) {
        return res
          .status(404)
          .json({ message: "Project data collection not found" });
      }

      clearImage(Project?.image);
      const deleteProject = await Project?.remove();
      res.status(200).json({
        success: true,
        error: null,
        data: deleteProject,
        message: "The Project was deleted successfully",
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

export default ProjectController;
