import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsEmail, IsNotEmpty, Validate } from 'class-validator';
import { ObjectType } from '@nestjs/graphql';
import { EmailUniquenessValidator } from './validators/email-uniqueness-validator';

@Entity({ name: 'users' })
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name' })
  @IsNotEmpty()
  firstName: string;

  @Column({ name: 'last_name' })
  @IsNotEmpty()
  lastName: string;

  @Column()
  @Index('index_users_on_email', { unique: true })
  @IsNotEmpty()
  @IsEmail({}, { message: 'Invalid email address' })
  @Validate(EmailUniquenessValidator)
  email: string;

  @Column({ name: 'encrypted_password' })
  encryptedPassword: string;

  @Column({ name: 'verification' })
  verification: boolean;
}
