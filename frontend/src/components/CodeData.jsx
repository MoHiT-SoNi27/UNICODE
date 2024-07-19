import React, { useState, useEffect } from 'react';
import { bubbleSort, selectionSort, insertionSort } from './sortingAlgorithms';

const Visualizer = () => {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(50);
  const [inputArray, setInputArray] = useState("");
  const [isSorting, setIsSorting] = useState(false);
  const [algorithm, setAlgorithm] = useState("bubbleSort");
  const containerHeight = 400;

  useEffect(() => {
    resetArray();
  }, [size]);

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < size; i++) {
      newArray.push(Math.floor(Math.random() * 100) + 1);
    }
    setArray(newArray);
  };

  const handleInputChange = (e) => {
    setInputArray(e.target.value);
  };

  const handleSubmit = () => {
    const newArray = inputArray
      .split(',')
      .map(num => parseInt(num.trim()))
      .filter(num => !isNaN(num))
      .map(num => Math.min(num, 10e5)); // Cap values to 10e5
    setArray(newArray);
  };

  const handleSort = () => {
    setIsSorting(true);
    let animations = [];
    switch (algorithm) {
      case "bubbleSort":
        animations = bubbleSort(array);
        break;
      case "selectionSort":
        animations = selectionSort(array);
        break;
      case "insertionSort":
        animations = insertionSort(array);
        break;
      default:
        break;
    }
    animateSorting(animations);
  };

  const animateSorting = (animations) => {
    const animationSpeed = 100; // Increase delay to slow down the animation
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = animations[i].length === 3;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx, action] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = action === 'sorted' ? null : arrayBars[barTwoIdx].style;
        const color = action === 'compare' ? 'red' : action === 'sorted' ? 'green' : 'blue';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          if (barTwoStyle) barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        const [barIdx, newHeight] = animations[i];
        const barStyle = arrayBars[barIdx].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}%`;
        }, i * animationSpeed);
      }
    }
    setTimeout(() => setIsSorting(false), animations.length * animationSpeed);
  };
  

  // Normalize values to fit within the container height
  const maxValue = Math.max(...array, 1);
  const normalizedArray = array.map(value => (value / maxValue) * 100);

  // Adjust bar width based on array size
  const barWidth = Math.max(1, Math.floor(600 / size));

  return (
    <div className="visualizer-container">
      <div className="controls mb-4">
        <div className="random-array mb-2">
          <label className="mr-2">Array Size:</label>
          <input
            type="range"
            min="10"
            max="200"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="slider"
            disabled={isSorting}
          />
          <span className="ml-2">{size}</span>
        </div>
        <button onClick={resetArray} className="bg-blue-500 text-white px-4 py-2 rounded mb-2" disabled={isSorting}>
          Generate New Array
        </button>
        <div className="input-array mb-2">
          <label className="mr-2">Input Array (comma-separated):</label>
          <input
            type="text"
            value={inputArray}
            onChange={handleInputChange}
            className="border p-1"
            disabled={isSorting}
          />
          <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-1 rounded ml-2" disabled={isSorting}>
            Submit
          </button>
        </div>
        <div className="sorting-controls mb-2">
          <label className="mr-2">Choose Algorithm:</label>
          <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)} disabled={isSorting}>
            <option value="bubbleSort">Bubble Sort</option>
            <option value="selectionSort">Selection Sort</option>
            <option value="insertionSort">Insertion Sort</option>
          </select>
          <button onClick={handleSort} className="bg-purple-500 text-white px-4 py-2 rounded ml-2" disabled={isSorting}>
            Sort
          </button>
          <button onClick={handleSort} className="bg-pink-500 text-white px-4 py-2 rounded ml-2" disabled={isSorting}>
            Stop
          </button>
        </div>
      </div>
      <div className="array-container mt-4" style={{ height: `${containerHeight}px` }}>
        {normalizedArray.map((value, idx) => (
          <div
            className="array-bar bg-blue-500 inline-block mx-1"
            key={idx}
            style={{ height: `${value}%`, width: `${barWidth}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
