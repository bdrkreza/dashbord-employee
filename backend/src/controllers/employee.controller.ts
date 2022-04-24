import { Request, Response } from "express";
import { Employee } from "../models";

const EmployeeController = {
  getEmployee: async (req: Request, res: Response) => {
    try {
      const employee = await Employee.find();

      res.status(200).json({
        success: true,
        data: employee,
      });
    } catch (error) {
      res.status(500).json({
        message: `There was an server side error.!`,
      });
    }
  },

  //   getEmployeeByID(id: string | undefined):  {

  //   }

  addEmployee: async (req: Request, res: Response) => {
    console.log(req.file);
    console.log(req.body);
    try {
      const file = req.file?.filename || "";
      const employee = new Employee({
        ...req.body,
        avatar: file,
      });
      const newEmployee = await employee.save();
      console.log(employee);
      return res.status(500).json({ success: true, data: newEmployee });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },

  //   updateEmployee(id: string, body: {}): Promise<IArticle> {
  //     return requests.patch(`/Employee/${id}`, body);
  //   }

  //   deleteEmployee(id: string): Promise<IArticle> {
  //     return requests.delete(`/Employee/${id}`);
  //   }
};

export default EmployeeController;
