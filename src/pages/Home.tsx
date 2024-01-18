import React, {useEffect, useState} from 'react';
import Item from '../components/posts/Item';
import {observer} from "mobx-react-lite";
import todos from "../mobx/todos";



const Home = observer(() => {

    useEffect(() => {
     todos.fetchTodos()
    },[])



    // const itemsArr = [
    //     { id: 1, title: 'efewfew' },
    //     { id: 2, title: 'efewwerf4wergfew' },
    //     { id: 3, title: 'efewwerfergerferferferfew' },
    // ];

    const [value, setValue] = useState('');
    const [filterInput, setFilterInput] = useState('');
    // const [items, setItems] = useState(itemsArr);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    const addSmth = () => {
        const newItem={
            id: Math.ceil(Math.random()),
            title: value
        }
        todos.addNewTodo(newItem)
        // setItems([...items, { id: items.length + Math.random(), title: value }]);
        setValue('');
    };

    const deleteItem = (itemId: number) => {
        todos.deleteTodo(itemId)

    };

    const toggleCheckbox = (itemId: number) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter((id) => id !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    const deleteAllItem = () => {
        const updatedItems = todos.todos.filter((elem) => !selectedItems.includes(elem.id));
        todos.deleteAllTodos(updatedItems)
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
            {todos.todos.length > 0 ?
                <>
                    <div>
                        {todos.todos.length > 0 &&
                            todos.todos.filter((item) => filterInput.toLowerCase() === '' ? item : item.title.toLowerCase().includes(filterInput)).map((elem) => (
                                <Item
                                    name={elem.title}
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
});

export default Home;

