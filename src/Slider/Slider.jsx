import React, { useState } from 'react';
import './Slider.css'; // Import CSS for styling

function Slider() {
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    return (
        <div className="slider-container">
            <input
                type="range"
                min={0}
                max={100}
                value={sliderValue}
                onChange={handleSliderChange}
                className="slider"
            />
            <span>{sliderValue}</span> {/* Display the value of the slider */}
        </div>
    );
}

export default Slider;
