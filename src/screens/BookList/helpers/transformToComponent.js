import React from 'react';
import { isArray } from 'util';

export const ToComponent = (options, TrueComponent, FalseComponent, changer) => {
  return (
    isArray(options) &&
    options.map(option => {
      if (typeof option[changer] === 'object') {
        return option;
      }

      option[changer] = option[changer] ? TrueComponent : FalseComponent;

      return option;
    })
  );
};

export default ToComponent;
