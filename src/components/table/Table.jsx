import React from "react";

const TableRow = ({ data, headers, specialCell }) => {
  return (
    <>
      <div className="flex flex-row border-b border-gray-300 py-2">
        {data.map((cell, index) => (
          <div
            key={index}
            className={`min-w-max  px-4 py-2 w-1/4 text-center border-r border-gray-300 ${
              headers || index === 0
                ? "font-semibold text-black uppercase"
                : specialCell === index && typeof cell === "number"
                ? cell >= 0.0
                  ? "text-green-600"
                  : "text-red-600"
                : "text-gray-700"
            }`}
          >
            {cell}
          </div>
        ))}
      </div>
    </>
  );
};

const Table = ({
  headers,
  data,
  enableButton,
  onbutton,
  onReportGeneration,
  specialCell,
}) => {
  const handleReportGeneration = () => {
    onReportGeneration(data);
  };
  return (
    <div className="mx-auto min-w-max">
      <TableRow data={headers} headers={true} />
      {data?.map((row, index) => (
        <TableRow
          key={index}
          data={row}
          headers={false}
          specialCell={specialCell}
        />
      ))}
      {onbutton && (
        <div className="flex w-full justify-end mt-4 ">
          <button
            disabled={!enableButton}
            onClick={handleReportGeneration}
            className={`bg-[#f14a3f] p-2 rounded-lg text-white my-2 px-6 ${
              enableButton
                ? "hover:bg-red-400"
                : "cursor-not-allowed bg-gray-400"
            }`}
          >
            {onbutton.button}
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
