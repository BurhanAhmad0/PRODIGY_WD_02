import React, { useState, useRef } from 'react';

function StopWatch() {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [Laps, setLaps] = useState([])
    const timerRef = useRef(null);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600000);
        const minutes = Math.floor((time % 3600000) / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const startStop = () => {
        if (isRunning) {
            clearInterval(timerRef.current);
        } else {
            timerRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1000);
            }, 1000);
        }
        setIsRunning(!isRunning);
    };

    const reset = () => {
        clearInterval(timerRef.current);
        setTime(0);
        setIsRunning(false);
    };

    const lap = () => {
        // console.log(formatTime(time));

        let lapList = [];
        lapList.push(formatTime(time));
        setLaps([...Laps, ...lapList]);
        console.log(Laps);
    }

    return (
        <div className="stopwatch h-screen flex flex-col justify-center items-center">
            <div className="time-display text-6xl font-bold text-[#33cccc] mb-8">
                {formatTime(time)}
            </div>
            <div className="flex space-x-4">
                <button
                    onClick={startStop}
                    className="bg-[#33cccc] text-white px-6 py-2 rounded-lg hover:bg-[#28a3a3] transition duration-300 cursor-pointer"
                >
                    {isRunning ? 'Stop' : 'Start'}
                </button>
                <button
                    onClick={reset}
                    className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-300 cursor-pointer"
                >
                    Reset
                </button>
                <button
                    onClick={lap}
                    className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-300 cursor-pointer"
                >
                    Lap
                </button>
            </div>

            <div className="laps p-4 bg-transparent rounded-lg">
                <ul>
                    {Laps.map((lap, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center text-lg text-[#33cccc] border-b border-[#33cccc] py-2"
                        >
                            <span className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 24 24"
                                    fill="#33cccc"
                                    className="mr-2"
                                >
                                    <path d="M19 4H6V2H4v18H3v2h4v-2H6v-5h13a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
                                </svg>
                                <span className="font-semibold">{`Lap ${index + 1}`}</span><span className='mx-3'>{`>`}</span>
                            </span>
                            <span className="ml-auto">{lap}</span> {/* Lap time aligned right */}
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    );
};

export default StopWatch;

