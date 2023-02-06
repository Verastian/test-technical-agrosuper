import { useEffect, useState } from "react";
import useWorkArea from "../../hooks/useWorkArea";
import DataGraph from "../graph/DataGraph";

const Graphics = ({ data, onChekOne, onChekTwo }) => {
  const elements = ["INGRESO", "COSTO", "GAV", "RESULTADO"];
  const [realData, setRealData] = useState();
  const [projectedData, setProjectedData] = useState();
  useEffect(() => {
    setRealData(data.real);
    setProjectedData(data.proyectado);
  }, [data]);

  return (
    <div>
      <h1 className="text-center font-semibold text-2xl text-slate-600">
        Carnes
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 lg:grid-rows-2">
        {elements.map((element) => (
          <div key={element} className="w-full h-full">
            <DataGraph
              key={element}
              element={element.toLowerCase()}
              realData={realData?.filter((d) => d.concepto === element)}
              projectedData={projectedData?.filter(
                (d) => d.concepto === element
              )}
              onChekOne={onChekOne}
              onChekTwo={onChekTwo}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="w-4 h-4 m-4 bg-red-300"></div>
        <span className="text-xs font-medium m-4">USDM (real)</span>
        <div className="w-4 h-4 m-4 bg-orange-300"></div>
        <span className="text-xs font-medium m-4">USDM (proyección)</span>
        <div className="w-4 h-4 m-4 bg-blue-300"></div>
        <span className="text-xs font-medium m-4">USD_TON (real)</span>
        <div className="w-4 h-4 m-4 bg-green-300"></div>
        <span className="text-xs font-medium m-4">USD_TON (proyección)</span>
      </div>
    </div>
  );
};

export default Graphics;
