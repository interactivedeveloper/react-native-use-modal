"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useModal = void 0;

var _react = _interopRequireWildcard(require("react"));

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _modalContext = require("./modal-context");

var _isNotNil = require("./util/is-not-nil");

var _modalIdGenerator = require("./modal-id-generator");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 모달을 등록하는 hook
 */
const useModal = modal => {
  const context = (0, _react.useContext)(_modalContext.ModalContext); // 모달 ID

  const modalId = (0, _react.useMemo)(() => String(_modalIdGenerator.ModalIdGenerator.getInstance().generate()), []);
  const [instance$] = (0, _react.useState)(() => new _rxjs.BehaviorSubject(null));
  (0, _react.useEffect)(() => {
    const clone = /*#__PURE__*/_react.default.cloneElement(modal, {
      ref: instance => {
        instance$.next(instance);
      }
    });

    context.set(modalId, clone);
    return () => {
      context.delete(modalId);
    };
  }, [context, instance$, modal, modalId]);
  const show = (0, _react.useCallback)(async param => (await (0, _rxjs.firstValueFrom)(instance$.pipe((0, _operators.filter)(_isNotNil.isNotNil)))).show(param), [instance$]);
  return (0, _react.useMemo)(() => {
    return {
      show
    };
  }, [show]);
};

exports.useModal = useModal;
//# sourceMappingURL=use-modal.js.map