import React, { useState } from "react";
import "./products.css";

const productData = [
  {
    _id: { $oid: "60ab2de75ee41f09b7f5fd42" },
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500\u0026fmt=jpeg\u0026qlt=80\u0026op_sharpen=0\u0026op_usm=1.0,1.0,5,0\u0026iccEmbed=0",
    name: "CHECK PRINT SHIRT",
    price: 110.0,
  },
  {
    _id: { $oid: "60ab2de75ee41f09b7f5fd43" },
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700\u0026amp;fmt=jpeg\u0026amp;qlt=80\u0026amp;op_sharpen=0\u0026amp;op_usm=1.0,1.0,5,0\u0026amp;iccEmbed=0",
    name: "GLORIA HIGH LOGO SNEAKER",
    price: 91.0,
  },
  {
    _id: { $oid: "60ab2de75ee41f09b7f5fd44" },
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700\u0026amp;fmt=jpeg\u0026amp;qlt=80\u0026amp;op_sharpen=0\u0026amp;op_usm=1.0,1.0,5,0\u0026amp;iccEmbed=0",
    name: "CATE RIGID BAG",
    price: 94.5,
  },
  {
    _id: { $oid: "60ab2de75ee41f09b7f5fd45" },
    imgUrl:
      "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520\u0026fmt=jpeg\u0026qlt=80\u0026op_sharpen=0\u0026op_usm=1.0,1.0,5,0\u0026iccEmbed=0",
    name: "GUESS CONNECT WATCH",
    price: 438.9,
  },
  {
    _id: { $oid: "60ab2df95ee41f09b7f5fd46" },
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700\u0026amp;fmt=jpeg\u0026amp;qlt=80\u0026amp;op_sharpen=0\u0026amp;op_usm=1.0,1.0,5,0\u0026amp;iccEmbed=0",
    name: "'70s RETRO GLAM KEFIAH",
    price: 20.0,
  },
];

const ProductsTable = () => {
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToShow = productData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(productData.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h2>Products Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {productsToShow.map((product, index) => (
            <tr key={index}>
              <td>{product._id.$oid}</td>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsTable;
