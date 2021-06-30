import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pageNumber.map((num, index) => {
            return (
              <li key={index} className="page-item">
                <a className="page-link" href="#" onClick={() => paginate(num)}>
                  {num}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
