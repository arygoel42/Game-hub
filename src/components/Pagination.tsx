import React from 'react'
import {Button} from '@chakra-ui/react'
interface Props {
    pagesPerPosts: number
    length: number
    handlePagination: (pageNumber: number) => void
    currentPage: number

}

const Pagination = ({pagesPerPosts, length, handlePagination, currentPage} : Props) => {
    const paginationNumbers = [] 
    for (let i = 1; i <= Math.ceil(length / pagesPerPosts); i++) {
        paginationNumbers.push(i);
      }
{if (paginationNumbers.length === 1 ) {
    return null
}}


  return (
    <div className="pagination">
    {paginationNumbers.map(pageNumber => (
      <Button
        key={pageNumber}
        className={currentPage === pageNumber ? 'active' : ''}
        onClick={() => handlePagination(pageNumber)}
      >
        {pageNumber}
      </Button>
    ))}
  </div>
  )
}

export default Pagination