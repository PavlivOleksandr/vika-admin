import React, { useEffect, useMemo, useState } from 'react';

// helpers
import { RcFile } from 'antd/es/upload';
import { styled } from 'styled-components';
import { RoutesEnum } from '../../router/routes';
import { StateModel } from '../../redux/reducers';
import { mattressesAPI } from '../../api/mattresses/mattressesAPI';
import { SimpleProductModel } from '../../interfaces/products';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { mattresses as mattressesActions } from '../../redux/actions/mattresses';

// components
import Box from '../../components/Additional/Box';
import Button from '../../components/Antd/Button';
import Search from '../../components/Antd/Search';
import Product from '../../components/Additional/Product';
import FileUploader from '../../components/Antd/FileUploader';
import LoaderWrapper from '../../components/Additional/LoaderWrapper';
import Notification, { NotificationType } from '../../components/Antd/Notification';

const MattressesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch: any = useDispatch();

  const [searchValue, setSearchValue] = useState('');
  const [notificationData, setNotificationData] = useState({ message: '', type: '', isOpen: false });

  const mattresses = useSelector<StateModel, SimpleProductModel[] | []>(state => state.mattressesReducer.mattresses);

  const uploadPrices = async (file: RcFile) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);

    const response = await mattressesAPI.uploadPriceList(formData);
    if (response) {
      setNotificationData({ message: 'Прайс лист успішно завантажено', type: 'success', isOpen: true });
    }
  };

  const renderMattresses = useMemo(() => {
    return mattresses.map((mattress: SimpleProductModel) => (
      <Product key={mattress._id} product={mattress} path={`${RoutesEnum.Mattresses}/${mattress._id}`} />
    ));
  }, [searchValue, mattresses]);

  useEffect(() => {
    dispatch(mattressesActions.getMattresses(searchValue));
  }, [searchValue]);

  useEffect(() => {
    if (location?.state?.title?.length) {
      setNotificationData({ message: location?.state?.title, type: location?.state?.type || 'info', isOpen: true });
      window.history.replaceState(null, '', null);
    }
  }, [location]);

  return (
    <Box direction='column'>
      <Box>
        <Button onClick={() => navigate(`/${RoutesEnum.NewMattress}`)}>Додати новий матрац</Button>
        <FileUploader btnText='Завантажити прайс лист' action={uploadPrices} />
      </Box>
      <StyledSearch placeholder='Знайти за назвою/артикулом' onChange={(value: string) => setSearchValue(value)} />

      <LoaderWrapper loading={false}>
        <MattressesContainer>{renderMattresses}</MattressesContainer>
      </LoaderWrapper>
      <Notification
        type={notificationData.type as NotificationType}
        title={notificationData.message}
        isOpen={notificationData.isOpen}
        closeCallback={() => setNotificationData(prevState => ({ ...prevState, isOpen: false }))}
      />
    </Box>
  );
};

const StyledSearch = styled(Search)`
  margin: ${({ theme }) => theme.marginM} 0;
`;

const MattressesContainer = styled(Box)`
  gap: 16px;
  flex-wrap: wrap;
`;

export default MattressesPage;
