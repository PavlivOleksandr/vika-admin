import React, { useEffect, useMemo, useState } from 'react';

// helpers
import { RcFile } from 'antd/es/upload';
import { RoutesEnum } from '../../router/routes';
import { StateModel } from '../../redux/reducers';
import { useNavigate } from 'react-router-dom';
import { SimpleProductModel } from '../../interfaces/products';
import { useDispatch, useSelector } from 'react-redux';
import { mattresses as mattressesActions } from '../../redux/actions/mattresses';

// components
import Box from '../../components/Additional/Box';
import Text from '../../components/Antd/Text';
import Button from '../../components/Antd/Button';
import Search from '../../components/Antd/Search';
import Product from '../../components/Additional/Product';
import FileUploader from '../../components/Antd/FileUploader';
import LoaderWrapper from '../../components/Additional/LoaderWrapper';

const MattressesPage = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const [searchValue, setSearchValue] = useState('');

  const mattresses = useSelector<StateModel, SimpleProductModel[] | []>(state => state.mattressesReducer.mattresses);

  const uploadPrices = async (file: RcFile) => {
    console.log(file);
  };

  const renderMattresses = useMemo(() => {
    if (mattresses.length) {
      return mattresses.map((mattress: SimpleProductModel) => (
        <Product key={mattress._id} product={mattress} path={`/${RoutesEnum.Mattresses}/${mattress._id}`} />
      ));
    } else {
      return <Text>На данний момент немає товарів</Text>;
    }
  }, [searchValue, mattresses]);

  useEffect(() => {
    dispatch(mattressesActions.getMattresses(searchValue));
  }, [searchValue]);

  return (
    <Box direction='column'>
      <Box>
        <Button onClick={() => navigate(`/${RoutesEnum.NewMattress}`)}>Додати новий матрац</Button>
        <FileUploader btnText='Завантажити прайс лист' action={uploadPrices} />
      </Box>
      <Search placeholder='Знайти за назвою/артикулом' onChange={e => setSearchValue(e)} />

      <LoaderWrapper loading={false}>
        <Box gap={12}>{renderMattresses}</Box>
      </LoaderWrapper>
    </Box>
  );
};

export default MattressesPage;
