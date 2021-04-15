import { EntityRepository, Repository } from 'typeorm';
import School from '../models/School';

@EntityRepository(School)
export default class SchoolRepository extends Repository<School> {
  public async execute(): Promise<School | null> {
    const school = await this.create({
      name: 'Royal Palm Beach High School',
      address: '10600 Okeechobee Blvd, West Palm Beach, FL 33411',
      latitude: 26.708,
      longitude: 80.2102,
    });

    return school;
  }
}
