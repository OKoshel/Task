import React, {FC} from 'react';


interface Props{
    totalPage: number,
    page: number,
    limit: number,
    onPageChange: (newPage: number) => void
    setPage: (page: number) => any
}

const Pagination:FC<Props> = ({page, limit, totalPage, onPageChange, setPage}) => {
    const changePaginationLabel = (direction: string) => {
        if (direction === 'left' && page > 1) {
            onPageChange(page - 1);
        } else if (direction === 'right' && page < totalPage) {
            onPageChange(page + 1);
        }
    };

    return (
        <div className="d-flex gap-3 align-items-center justify-content-end">
            {`${page} of ${totalPage}`}

            <div className="d-flex gap-3">
                <div
                    className="pointer"
                    onClick={() => changePaginationLabel("left")}
                >

                    <button className="btn btn-pagination" onClick={() => setPage(-1)}>Left</button>

                </div>
                <div
                    className="pointer"
                    onClick={() => changePaginationLabel("right")}
                >
                    <button className="btn btn-pagination " onClick={() => setPage(+1)}>Right</button>
                </div>
            </div>
        </div>
    );
};

export default Pagination;