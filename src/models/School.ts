/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  Entity,
  BaseEntity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Geometry } from 'geojson';

@Entity('schools')
export default class School extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  longitude: number;

  @Column()
  latitude: number;

  @Column({
    type: 'geometry',
    nullable: true,
    spatialFeatureType: 'Point',
    srid: 4326,
  })
  location: Geometry;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  static findSchoolsNear(
    latitude: number,
    longitude: number,
    radius: number,
    limit = 10,
    offset = 0,
  ) {
    return this.createQueryBuilder('school')
      .where(
        `ST_DWithin(Geography(ST_MakePoint(school.longitude, school.latitude)), Geography(ST_MakePoint(${longitude}, ${latitude})), ${radius})`,
      )
      .limit(limit)
      .skip(offset)
      .getMany();
  }
}
