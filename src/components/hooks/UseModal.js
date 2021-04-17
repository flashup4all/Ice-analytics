import {useState, useCallback} from 'react';

const UseModal = state => {
  const [isOpen, toggleModal] = useState (false);

  const open = useCallback (() => toggleModal (true), []);
  const close = useCallback (() => toggleModal (false), []);

  return {isOpen, close, open};
};

export default UseModal;
