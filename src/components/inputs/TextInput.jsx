import React, { useEffect, useState } from "react";

const TextInput = ({ height, width, onTextSubmit, currentText }) => {
  const [value, setValue] = useState(currentText);
  useEffect(() => {
    setValue(currentText);
  }, [onTextSubmit]);
  const handleSubmit = (e) => {
    e.preventDefault();
    onTextSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <textarea
          className={`h-${height} w-${width} resize-none overflow-auto p-2 bg-slate-100 rounded-xl`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-indigo-500 p-2 rounded-lg text-white my-2 w-full hover:bg-indigo-400"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default TextInput;
