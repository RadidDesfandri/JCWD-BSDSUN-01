import prisma from '../lib/prisma';

const ExampleService = {
  getExample: async () => {
    const example = await prisma.example.findMany();

    return example;
  },
};

export default ExampleService;
