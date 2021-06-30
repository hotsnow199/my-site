import { EnhanceAction } from '../../schema/type';
import { CHANGE_TAB, SET_LOADER, SET_RESPONSE_VIEW, OPEN_AlERT, CLOSE_ALERT } from '../index';

type Variant = 'filled' | 'outlined';
type Severity = 'error' | 'warning' | 'info' | 'success';
interface RenderAlertProps {
  severity: Severity;
  message: string;
  variant?: Variant;
}
type RenderAlertAction = RenderAlertProps & EnhanceAction;

const changeTab = (index: number): EnhanceAction => ({
  type: CHANGE_TAB,
  payload: index,
});
const setLoader = (value: boolean): EnhanceAction => ({
  type: SET_LOADER,
  payload: value,
});
const setResponseView = (data: any): EnhanceAction => ({
  type: SET_RESPONSE_VIEW,
  payload: data,
});

const openAlert = ({ severity, message, variant }: RenderAlertProps): RenderAlertAction => ({
  severity,
  variant,
  type: OPEN_AlERT,
  message,
});
const closeAlert = (): EnhanceAction => ({ type: CLOSE_ALERT });

export type { RenderAlertProps, RenderAlertAction, Variant, Severity };

export { changeTab, setLoader, setResponseView, openAlert, closeAlert };
