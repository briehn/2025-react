import { useState } from "react";

export default function UserInput() {
    const [data, setData] = useState({
        initial: 0,
        annual: 0,
        expectedReturn: 0,
        duration: 0
    });

    function onInputChange(e, type) {
        let val = e.target.value;

        setData((oldData) => {
            return {
                ...oldData,
                [type]: val
            }

        })
    }

    return <section id="user-input">
        <div className="input-group">
        <p>
            <label>Initial Investment</label>
            <input type="number" onChange={(e) => onInputChange(e, 'initial')} required/>
        </p>
        <p>
            <label>Annual Investment</label>
            <input type="number" onChange={(e) => onInputChange(e, 'annual')} required/>
        </p>
        </div>
        <div className="input-group">
        <p>
            <label>Expected Return</label>
            <input type="number" onChange={(e) => onInputChange(e, 'expectedReturn')} required/>
        </p>
        <p>
            <label>Duration</label>
            <input type="number" onChange={(e) => onInputChange(e, 'duration')} required/>
        </p>
        </div>
    </section>
}