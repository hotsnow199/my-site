import Loader from '../../common/Loader';
import { useSelector } from 'react-redux';
import FormWrapper from './FormWrapper';

export default function PostmanContainer() {
  const isShowloader: boolean = useSelector(
    (state: any) => state.request.show_loader
  );
  return (
    <main>
      {isShowloader ? <Loader /> : null}
      <FormWrapper />
    </main>
  );
}
