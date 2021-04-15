/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata';
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import SchoolRepository from '../repositories/SchoolRepository';

const transactionsRouter = Router();

transactionsRouter.post('/create', async (request, response) => {
  const schoolssRepository = getCustomRepository(SchoolRepository);
  const school = await schoolssRepository.execute();
  return response.json(school);
});

export default transactionsRouter;
