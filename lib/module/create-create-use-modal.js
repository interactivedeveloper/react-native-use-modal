import { createUseModal } from './create-use-modal';
import _ from 'lodash';
/**
 * createUseModal creation function with default value of option argument set
 */

export const createCreateUseModal = _option => (...param) => {
  const [Content, option] = param;

  const composedOption = _.defaultsDeep(option, _option);

  return createUseModal(Content, composedOption);
};
//# sourceMappingURL=create-create-use-modal.js.map