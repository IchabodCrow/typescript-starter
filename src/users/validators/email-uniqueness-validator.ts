import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Not, FindOperator } from 'typeorm';
import { User } from './../user.entity';

interface UserSearchCondition {
  email: string;
  id?: FindOperator<string>;
}

@ValidatorConstraint({ name: 'emailUniqueness', async: true })
export class EmailUniquenessValidator implements ValidatorConstraintInterface {
  async validate(email: string, args: ValidationArguments): Promise<boolean> {
    const userId = (args.object as User).id;
    const searchCondition: UserSearchCondition = { email };
    if (userId) searchCondition.id = Not((args.object as User).id);
    return !(await User.findOne(searchCondition));
  }

  defaultMessage(): string {
    return 'Cette adresse email existe déjà.';
  }
}
