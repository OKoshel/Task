import React, {FC} from 'react';

interface Props{
    name: string,
    deleteItem: (id: number) => void
    id: number
    isChecked: boolean
    toggleCheckbox: (id: number) => void

}

const Item:FC<Props> = ({ name, deleteItem, id, isChecked, toggleCheckbox }) => {
    return (
        <div className="d-flex gap-2 justify-content-between mb-3">
            <div className="d-flex gap-3 align-items-center">
                <input type="checkbox" checked={isChecked} onChange={() => toggleCheckbox(id)} />
                <h3>{name}</h3>
            </div>

            <button className="btn-success btn" onClick={() => deleteItem(id)}>
                Delete
            </button>
        </div>
    );
};

export default Item;
