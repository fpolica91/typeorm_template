/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata';
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { Geometry } from 'geojson';
import SchoolRepository from '../repositories/SchoolRepository';

const transactionsRouter = Router();

transactionsRouter.post('/create', async (request, response) => {
  const schoolssRepository = getCustomRepository(SchoolRepository);
  const school = await schoolssRepository.execute();
  if (school) await schoolssRepository.save(school);

  return response.json(school);
});

transactionsRouter.get('/find', async (request, response) => {
  const schoolssRepository = getCustomRepository(SchoolRepository);
  // .where(`ST_DWithin(Geography(ST_MakePoint(school.longitude, school.latitude)), Geography(ST_MakePoint(${longitude}, ${latitude})), ${radius})`)
  const school = await schoolssRepository.findOne({
    where: { name: 'Royal Palm Beach High School' },
  });

  return response.json(school);
});

export default transactionsRouter;
