import React, { useState } from "react";

const InputWithSlider = ({
  onTest,
  onGuardarValor,
  initialValue,
  sliderRange,
}) => {
  const [value, setValue] = useState(initialValue);
  return (
    <div className="flex flex-col items-center">
      <div className="w-full mt-4">
        <input
          type="range"
          min={sliderRange?.min}
          max={sliderRange?.max}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-gray-200 appearance-none rounded-lg shadow-inner"
        />
      </div>
      <div className="w-full mt-2">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-16 p-2 rounded-lg shadow-inner bg-gray-200"
        />
      </div>
      <div className="w-full mt-4">
        <button
          onClick={() => onTest(value)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Probar
        </button>
        <button
          onClick={() => onGuardarValor(value)}
          className="px-4 py-2 bg-[#f14a3f] text-white rounded-lg hover:bg-red-400 ml-4"
        >
          Guardar valor
        </button>
      </div>
    </div>
  );
};

export default InputWithSlider;
