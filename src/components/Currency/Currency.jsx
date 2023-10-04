import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectCurrency,
  //   selectIsLoading,
  //   selectError,
} from 'redux/currency/selectors';
import { fetchCurrency } from 'redux/currency/operations';

export const Currency = () => {
  const dispatch = useDispatch();
  const rates = useSelector(selectCurrency);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  return (
    <table>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Purchase</th>
          <th>Sale</th>
        </tr>
      </thead>

      <tbody>
        {rates.map((item, index) => (
          <tr key={index}>
            <td>{item.currency}</td>
            <td>{item.purchase}</td>
            <td>{item.sale}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
