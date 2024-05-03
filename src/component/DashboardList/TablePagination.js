import React from 'react'
import { Pagination } from 'react-bootstrap'

const TablePagination = ({ active, setActive, pages }) => {

    let items = [];
    for (let number = 1; number <= pages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => setActive(number)}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <Pagination>
            {items}
        </Pagination>
    )
}

export default TablePagination