import { EntityRepository, Repository } from 'typeorm';

// import { Point } from '@types/geojson';
import School from '../models/School';

@EntityRepository(School)
export default class SchoolRepository extends Repository<School> {
  public async execute(): Promise<School | null> {
    const school = await this.create({
      name: 'Royal Palm Beach High School',
      address: '10600 Okeechobee Blvd, West Palm Beach, FL 33411',
      latitude: 31.865668,
      longitude: -28.737904,
    });

    School.findSchoolsNear(31.865668, -28.737904, 20)
      .then(response => console.log(response))
      .catch(error => console.log(error.message));

    return school;
  }
}
// "longitude": -28.737904,
//   "latitude": 31.865668,
