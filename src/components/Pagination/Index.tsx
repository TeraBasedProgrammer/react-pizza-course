import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'

interface PaginationProps{
    page: number
    onChangePage: (page: number) => void
}

export default function Pagination(props: PaginationProps) {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => props.onChangePage(event.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
