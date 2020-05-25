import React from "react";
import './shift.css';


function Shift() {
    function doShift() {
        let mas = [1, 2, 3, 4, 5]
        console.log(mas)
        const k = 1
        for (let i = 0; i < k; i++) {
        mas.push(mas[0])
        mas.shift()
        console.log(mas)
    }
}
    return (
        <section className="shift">
            <button className="shift__button" onClick={doShift}>Click me!</button>
        </section>
    );
}

export default Shift;