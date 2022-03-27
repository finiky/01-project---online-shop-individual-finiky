import "./Pagination.css";

const Pagination = ({ pageList, setCurrentPage }) => {
  return (
    <div>
      {pageList.map((pageNumber) => {
        return (
    <button
      className="paginatoin-button"
      onClick={() => {
        setCurrentPage(pageNumber);
      }}
    >
      {pageNumber}
    </button>
        );
      })}
    </div>
  );
};

export default Pagination;
