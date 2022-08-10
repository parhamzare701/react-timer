import React, { useEffect } from "react";
import { useState } from "react";
function StopWatch() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);
    return (
        <div className="stopwatch">
            <div className="stopwatch__inner">
                <div className="stopwatch__timer">
                    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                    <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                </div>
                <div className="stopwatch__btn">
                    <button className="stopwatch__buttons" onClick={() => setRunning(true)}>Start</button>
                    <button className="stopwatch__buttons" onClick={() => setRunning(false)}>Stop</button>
                    <button className="stopwatch__buttons" onClick={() => setTime(0)}>Reset</button>
                </div>
            </div>
        </div>
    );
};
export default StopWatch;