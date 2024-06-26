import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectOrder } from '../../store/orderSlice';

function ProductsTab() {
  const order = useSelector(selectOrder);

  return (
    <div className="table-responsive">
      <table className="simple">
        <thead>
          <tr>
            <th>
              <Typography className="font-semibold">آیدی</Typography>
            </th>
            <th>
              <Typography className="font-semibold">تصویر</Typography>
            </th>
            <th>
              <Typography className="font-semibold">نام</Typography>
            </th>
            <th>
              <Typography className="font-semibold">قیمت</Typography>
            </th>
            <th>
              <Typography className="font-semibold">تعداد</Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {order.products.map((product) => (
            <tr key={product.id}>
              <td className="w-64">{product.id}</td>
              <td className="w-80">
                <img className="product-image" src={product.image} alt="product" />
              </td>
              <td>
                <Typography
                  component={Link}
                  to={`/apps/e-commerce/products/${product.id}`}
                  className="truncate"
                  style={{
                    color: 'inherit',
                    textDecoration: 'underline',
                  }}
                >
                  {product.name}
                </Typography>
              </td>
              <td className="w-64 text-right">
                <span className="truncate">IRR{product.price}</span>
              </td>
              <td className="w-64 text-right">
                <span className="truncate">{product.quantity}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTab;
