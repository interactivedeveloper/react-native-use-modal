"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _modalContext = require("./modal-context");

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ModalProvider = ({
  children
}) => {
  const [modalMap, setModalMap] = (0, _react.useState)(new Map());
  const modalContext = (0, _react.useMemo)(() => {
    return {
      // 모달 추가/업데이트
      set: (id, node) => {
        // ID에 입력받은 노드 매핑
        setModalMap(prevState => new Map(prevState).set(id, node));
      },
      // 모달 제거
      delete: id => {
        // 주어진 ID에 해당하는 모달 제거
        setModalMap(prevState => {
          const nextMap = new Map(prevState);
          nextMap.delete(id);
          return nextMap;
        });
      }
    };
  }, []);
  const modalList = (0, _react.useMemo)(() => {
    return [...modalMap.entries()].sort(([keyA], [keyB]) => keyA.localeCompare(keyB)).map(([key, modal]) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: key
    }, modal));
  }, [modalMap]);
  return /*#__PURE__*/_react.default.createElement(_modalContext.ModalContext.Provider, {
    value: modalContext
  }, children, modalList);
};

exports.ModalProvider = ModalProvider;
//# sourceMappingURL=modal-provider.js.map