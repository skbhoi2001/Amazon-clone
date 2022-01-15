import React from "react"
import "./pagination.css"
const Pagination1 = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button className="button1212" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Pagination1
