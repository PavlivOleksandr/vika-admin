import React, { useEffect, useMemo, useState } from 'react';

// helpers
import { RcFile } from 'antd/es/upload';
import { styled } from 'styled-components';
import { sofasAPI } from '../../api/sofas/sofasAPI';
import { RoutesEnum } from '../../router/routes';
import { StateModel } from '../../redux/reducers';
import { SimpleProductModel } from '../../interfaces/products';
import { sofas as sofasActions } from '../../redux/actions/sofas';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

// components
import Box from '../../components/Additional/Box';
import Button from '../../components/Antd/Button';
import Search from '../../components/Antd/Search';
import Product from '../../components/Additional/Product';
import FileUploader from '../../components/Antd/FileUploader';
import LoaderWrapper from '../../components/Additional/LoaderWrapper';
import Notification, { NotificationType } from '../../components/Antd/Notification';

const SofasPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch: any = useDispatch();

  const [searchValue, setSearchValue] = useState('');
  const [notificationData, setNotificationData] = useState({ message: '', type: '', isOpen: false });

  const sofas = useSelector<StateModel, SimpleProductModel[] | []>(state => state.sofasReducer.sofas);

  const uploadPrices = async (file: RcFile) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);

    const response = await sofasAPI.uploadPriceList(formData);
    if (response) {
      setNotificationData({ message: 'Прайс лист успішно завантажено', type: 'success', isOpen: true });
    }
  };

  const renderSofas = useMemo(() => {
    if (sofas.length) {
      return sofas.map((sofas: SimpleProductModel) => (
        <Product key={sofas._id} product={sofas} path={`${RoutesEnum.Sofas}/${sofas._id}`} />
      ));
    }
  }, [searchValue, sofas]);

  useEffect(() => {
    dispatch(sofasActions.getSofas(searchValue));
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
        <Button onClick={() => navigate(`/${RoutesEnum.NewSofa}`)}>Додати новий диван</Button>
        <FileUploader btnText='Завантажити прайс лист' action={uploadPrices} />
      </Box>
      <StyledSearch placeholder='Знайти за назвою/артикулом' onChange={(value: string) => setSearchValue(value)} />
      <LoaderWrapper loading={false}>
        <SofasContainer>{renderSofas}</SofasContainer>
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

const SofasContainer = styled(Box)`
  gap: 16px;
  flex-wrap: wrap;
`;

const StyledSearch = styled(Search)`
  margin: ${({ theme }) => theme.marginM} 0;
`;

export default SofasPage;
