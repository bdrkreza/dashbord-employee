import { Request, Response } from "express";
import fs from "fs";
import { Employee } from "../models";

const clearImage = (filePath: any) => {
  fs.unlink(`./public/uploads/${filePath}`, (err: any) => console.log(err));
};

const EmployeeController = {
  getEmployee: async (req: Request, res: Response) => {
    try {
      const pageSize = 10;
      const page = Number(req.query.pageNumber) || 1;

      // Get search keyword from request and search for partial match
      const keyword = req.query.keyword
        ? {
            name: {
              $regex: req.query.keyword,
              $options: "i",
            } as any,
          }
        : {};

      const count = await Employee.countDocuments({ ...keyword });

      const employee = await Employee.find({ ...keyword })
        .limit(pageSize)
        .skip(pageSize * (page - 1));
      const getData = {
        employee,
        page,
        pages: Math.ceil(count / pageSize),
      };
      res.status(200).json({
        success: true,
        error: null,
        data: getData,
        message: "data request successfully",
      });
    } catch (error: any) {
      res.status(404).json({
        success: false,
        error: error.message,
        data: null,
        message: "database request failed!",
      });
    }
  },

  getEmployeeByID: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };
      const employee = await Employee.findById({ _id: id });
      if (!employee) {
        return res
          .status(404)
          .json({ message: "employee data collection not found" });
      }
      res.status(200).json({
        success: true,
        error: null,
        data: employee,
        message: "data request successfully",
      });
    } catch (error: any) {
      res.status(404).json({
        success: false,
        error: error.message,
        data: null,
        message: "database request failed!",
      });
    }
  },

  addEmployee: async (req: Request, res: Response) => {
    try {
      const file = req.file?.filename || "";
      if (!file) {
        return res.send(`You must select at least 1 file.`);
      }
      const employee = new Employee({
        ...req.body,
        avatar: file,
      });
      const newEmployee = await employee.save();
      res.status(500).json({
        success: true,
        error: null,
        data: newEmployee,
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

  updateEmployee: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };
      const employee = await Employee.findById({ _id: id });
      if (!employee) {
        return res
          .status(404)
          .json({ message: "The employee with the given id was not found" });
      }

      const file = req.file?.filename || "";
      if (file) {
        clearImage(employee?.avatar);
      }
      const updateEmployee = await Employee.findByIdAndUpdate(
        { _id: id },
        { ...req.body, avatar: file },
        {
          new: true,
        }
      );
      res.status(200).json({
        success: true,
        error: null,
        data: updateEmployee,
        message: "The employee was deleted successfully",
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

  deleteEmployee: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };
      const employee = await Employee.findById({ _id: id });
      if (!employee) {
        return res
          .status(404)
          .json({ message: "employee data collection not found" });
      }

      clearImage(employee?.avatar);
      const deleteEmployee = await employee?.remove();
      res.status(200).json({
        success: true,
        error: null,
        data: deleteEmployee,
        message: "The employee was deleted successfully",
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

export default EmployeeController;
