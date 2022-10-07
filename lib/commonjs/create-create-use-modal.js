"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCreateUseModal = void 0;

var _createUseModal = require("./create-use-modal");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * createUseModal creation function with default value of option argument set
 */
const createCreateUseModal = _option => (...param) => {
  const [Content, option] = param;

  const composedOption = _lodash.default.defaultsDeep(option, _option);

  return (0, _createUseModal.createUseModal)(Content, composedOption);
};

exports.createCreateUseModal = createCreateUseModal;
//# sourceMappingURL=create-create-use-modal.js.map