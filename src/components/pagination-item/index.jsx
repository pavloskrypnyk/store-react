import '../pagination/index.css';

const PaginationItem = ({ pageIndex, isActive, onPageItemClick }) => {
    const activeClass = isActive ? 'active' : '';

    return (
        <li >
            <a  onClick={() => onPageItemClick(pageIndex)}
                href="#"
                className={`pagination__item ${activeClass}`}
            >
                {pageIndex}
            </a>
        </li>
    );
}

export default PaginationItem