import { formatDate } from '../../../helpers';
import { isArray } from 'util';

export const ToComponent = (options, TrueComponent, FalseComponent) => {
  return (
    isArray(options) &&
    options.map(option => {
      option.dayOfLoan = option.dayOfLoan && formatDate(option.dayOfLoan);
      option.devolutionDate = option.devolutionDate && formatDate(option.devolutionDate);

      if (typeof option.returned_component !== 'object') {
        option.returned_component = option.returned ? TrueComponent : FalseComponent;
      }

      return option;
    })
  );
};

export default ToComponent;
