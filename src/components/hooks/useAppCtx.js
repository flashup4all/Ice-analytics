import {useContext} from 'react';
import {Appctx} from '../../App';

const useAppCtx = () => {
  const values = useContext (Appctx);

  return values;
};
export default useAppCtx;
