import { Request, Response } from 'express';
import ExampleService from '../services/example.service';
import ExampleValidator from '../validators/example.validator';

const ExampleController = {
  getExample: async (req: Request, res: Response) => {
    const validate = ExampleValidator.example.parse(req.body);

    if (!validate) {
      return res.status(400).json({
        message: 'Invalid request',
      });
    }

    const result = await ExampleService.getExample();

    res.status(200).json({
      message: 'Success',
      data: result,
    });
  },
};

export default ExampleController;
