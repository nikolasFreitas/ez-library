import { formatDate } from '../../../helpers';
import { isArray } from 'util';

export const parseDate = (options) => {
  return (
    isArray(options) &&
    options.map(option => {
      option.dayOfLoan = option.dayOfLoan && formatDate(option.dayOfLoan);
      option.devolutionDate = option.devolutionDate && formatDate(option.devolutionDate);
      return option;
    })
  );
};

export default parseDate;
