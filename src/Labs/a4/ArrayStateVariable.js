import React, { useState } from "react";

function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index) => {
        setArray(array.filter((item, i) => i !== index));
    };

    return (
        <div>
            <h2>Array State Variable</h2>
            <button className="btn btn-success"
                onClick={addElement}>Add Element</button>
            <table style={{ width: '15%', marginTop: '10px', borderCollapse: 'collapse' }}>                    
            <tbody>
                    {array.map((item, index) => (
                        <tr key={index}>
                            <td style={{ padding: '5px', border: '1px solid #ddd', display: 'flex', justifyContent: 'space-between' }}>
                                <span>{item}</span>
                                <button className="btn btn-danger"
                                    onClick={() => deleteElement(index)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ArrayStateVariable;

