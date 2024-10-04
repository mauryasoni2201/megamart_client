import React,{useMemo,useCallback}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { optionActions } from '../../store/optionsSlice';
import debounce from 'lodash.debounce';
import { categories, orderOptions, sortingOptions } from '../../models/SelectOptions';
import Button from '../Button/Button';
import Select from '../Select/Select';

const DataControls: React.FC = () => {
  const {category,sorting, order,skip,search} = useSelector((state:any) => state.options);
  const dispatch = useDispatch();

  const handleOrder = (event: React.ChangeEvent<HTMLSelectElement>):void => {
    dispatch(optionActions.setOptions({key:'order',value:event.target.value}));
    dispatch(optionActions.resetSearchAndCategory());
  };
  const handleSorting = (event: React.ChangeEvent<HTMLSelectElement>):void => {
    dispatch(optionActions.setOptions({key:'sorting',value:event.target.value}));
    dispatch(optionActions.resetSearchAndCategory());
  };
  const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>):void => {
    dispatch(optionActions.setOptions({key:'category',value:event.target.value}));
    dispatch(optionActions.resetSearch());
  };

  const debouncedDispatch = useMemo(
    () =>
      debounce((value: string):void => {
        dispatch(optionActions.setOptions({key:'search',value:value.toLowerCase()}));
      }, 1000),[dispatch]);

  const handleSearchProduct = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>):void => {
      debouncedDispatch(event.target.value);
    },[debouncedDispatch]);

  const handleNextPage = (): void => {
    dispatch(optionActions.nextPage());
  };
  const handlePreviousPage = (): void => {
    dispatch(optionActions.previousPage());
  };

  return (
    <>
    <div className="more-options">
    <div className="product-category">
      <Select
        className="category-filtering"
        name="category"
        onChange={handleCategory}
      >
        {categories?.map(({ value, content }) => (
          <option key={value} value={value}>
            {content}
          </option>
        ))}
      </Select>
    </div>
    <div className="sorting-products">
      <Select
        onChange={handleSorting}
        className="category-filtering sorting"
        name="sorting"
        value={sorting}
      >
        {sortingOptions?.map(({ value, content }) => (
          <option key={value} value={value}>
            {content}
          </option>
        ))}
      </Select>
      <Select
        onChange={handleOrder}
        className="category-filtering sorting"
        name="order"
        value={order}
      >
        {orderOptions?.map(({ value, content }) => (
          <option key={value} value={value}>
            {content}
          </option>
        ))}
      </Select>
    </div>
    <div className="product-search">
      <input
        type="search"
        onChange={handleSearchProduct}
        placeholder="Search a product..."
      />
    </div>
  </div>
  <div className="pagination">
    <Button
      disabled={skip === 0}
      style={{
        opacity: skip === 0 ? 0.4 : 1,
        display: category || search.trim().length>0 ? "none" : "block",
      }}
      onClick={handlePreviousPage}
    >PREVIOUS
    </Button>
    <Button
      disabled={skip === 190}
      style={{
        opacity: skip === 190 ? 0.4 : 1,
        display: category || search.trim().length>0 ? "none" : "block",
      }}
      onClick={handleNextPage}
    >NEXT
    </Button>
  </div>
    </>
  );
}

export default DataControls;
