import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data';

function ProductScreen(props) {
  const foundProduct = data.products.find(
    (x) => x._id === props.match.params.id,
  );
  if (!foundProduct) {
    return <div>Product Not Found</div>;
  }

  return (
    <div>
      <Link to="/">Back to Result</Link>
      <div className="row top">
        <div className="col-2">
          <img src={foundProduct.image} alt={foundProduct.name} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{foundProduct.name}</h1>
            </li>
            <li>
              <Rating
                numReviews={foundProduct.numReviews}
                rating={foundProduct.rating}
              />
            </li>
            <li>Price: ${foundProduct.price}</li>
            <li>
              Description:
              <p>{foundProduct.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${foundProduct.price}</div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {foundProduct.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="danger">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
