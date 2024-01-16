import React, { useState } from 'react';
import Item from '../components/posts/Item';



const Home = () => {
    const itemsArr = [
        { id: 1, name: 'efewfew' },
        { id: 2, name: 'efewwerf4wergfew' },
        { id: 3, name: 'efewwerfergerferferferfew' },
    ];

    const [value, setValue] = useState('');
    const [filterInput, setFilterInput] = useState('');
    const [items, setItems] = useState(itemsArr);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    const addSmth = () => {
        setItems([...items, { id: items.length + Math.random(), name: value }]);
        setValue('');
    };

    const deleteItem = (itemId: number) => {
        const updatedItems = items.filter((elem) => elem.id !== itemId);
        setItems(updatedItems);
    };

    const toggleCheckbox = (itemId: number) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter((id) => id !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    const deleteAllItem = () => {
        const updatedItems = items.filter((elem) => !selectedItems.includes(elem.id));
        setItems(updatedItems);
        setSelectedItems([]);
    };



    return (
        <div className="container">
            <div className="d-flex gap-2">
                <input
                    placeholder="Add smth to do"
                    className="input"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <input
                    placeholder="Filter by title"
                    className="input"
                    value={filterInput}
                    onChange={(e) => setFilterInput(e.target.value)}
                />
                <button className="btn-success btn" onClick={addSmth}>
                    Add smth
                </button>
            </div>

            <h2 className="mt-3 mb-3">Item List:</h2>
            {items.length > 0 ?
                <>
                    <div>
                        {items.length > 0 &&
                            items.filter((item) => filterInput.toLowerCase() === '' ? item : item.name.toLowerCase().includes(filterInput)).map((elem) => (
                                <Item
                                    name={elem.name}
                                    key={elem.id}
                                    id={elem.id}
                                    deleteItem={() => deleteItem(elem.id)}
                                    toggleCheckbox={() => toggleCheckbox(elem.id)}
                                    isChecked={selectedItems.includes(elem.id)}

                                />
                            ))}
                    </div>
                    <button className="btn-success btn" onClick={deleteAllItem}>
                        Delete All
                    </button></> : <div>List is empty</div>
            }


        </div>
    );
};

export default Home;

// const Home = ({url}: {url: string}) => {
//     const { value, isLoading, error } = UseBackground(async () => {
//         const response = await fetch(url);
//         const result = await response.text();
//         return result;
//     }, [url]);
//
//     return (
//         <div>
//             {isLoading
//                 ? <div>Loading...</div>
//                 : error
//                     ? <div>Error: {error.message}</div>
//                     : <div>Value: {value}</div>
//             }
//         </div>
//     );
// }
// export default Home;