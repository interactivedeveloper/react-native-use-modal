import React, { useMemo, useState } from 'react';
import { ModalContext } from './modal-context';
import { View } from 'react-native';
export const ModalProvider = ({
  children
}) => {
  const [modalMap, setModalMap] = useState(new Map());
  const modalContext = useMemo(() => {
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
  const modalList = useMemo(() => {
    return [...modalMap.entries()].sort(([keyA], [keyB]) => keyA.localeCompare(keyB)).map(([key, modal]) => /*#__PURE__*/React.createElement(View, {
      key: key
    }, modal));
  }, [modalMap]);
  return /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: modalContext
  }, children, modalList);
};
//# sourceMappingURL=modal-provider.js.map