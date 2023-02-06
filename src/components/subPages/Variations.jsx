import React, { useEffect, useState } from "react";
import useWorkArea from "../../hooks/useWorkArea";
import TextInput from "../inputs/TextInput";
import Table from "../table/Table";

const Variations = () => {
  const { getVariations, variations, setNotification } = useWorkArea();
  const [dataVariations, setDataVariations] = useState([]);
  const [dataText, setDataText] = useState([]);

  useEffect(() => {
    const auth = localStorage.getItem("user");
    getVariations({ auth: JSON.parse(auth) });
  }, []);
  useEffect(() => {
    const dataVariationsLocalStorage = JSON.parse(
      localStorage.getItem("Variations")
    );
    const { data } = dataVariationsLocalStorage;
    console.log(data);
    setDataVariations(data);

    const textVariationsLocalStorage = JSON.parse(
      localStorage.getItem("textVariations")
    );
    setDataText(textVariationsLocalStorage);
  }, []);

  console.log(dataVariations);
  const newArray = dataVariations?.map((obj) => {
    const values = Object.values(obj);
    values.forEach((value, i) => {
      if (typeof value === "number") {
        values[i] = value.toFixed(2);
      }
    });
    return values;
  });
  console.log(newArray);

  const dataFinal = newArray.map((row) => row.slice(1));

  const headers = [
    "Sector  ",
    "ropSemAnt",
    "ropSemActual",
    "rop",
    "ventas",
    "costoVentas",
    "GAV",
    "Total TON",
    "vol Nac",
    "vol Exp",
  ];
  const handleTextSubmit = (text) => {
    console.log(text);
    localStorage.setItem("textVariations", JSON.stringify(text));

    const textVariationsLocalStorage = JSON.parse(
      localStorage.getItem("textVariations")
    );
    setDataText(textVariationsLocalStorage);

    setNotification({
      msg: `El Texto se ha Guardado correctamente`,
      type: `success`,
    });
    setTimeout(() => {
      setNotification({});
    }, 2000);
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-4 h-">
        <div className=" m-4 col-span-1 sm:col-span-4 p-8 bg-white rounded-xl overflow-auto ">
          <Table headers={headers} data={dataFinal} />
        </div>
        <div className="m-4 row-span-2 col-span-1 flex h-fit w-fit  flex-col justify-between rounded-xl bg-white p-8">
          <TextInput
            height="64"
            width="96"
            onTextSubmit={handleTextSubmit}
            currentText={dataText}
          />
        </div>
      </div>
    </>
  );
};

export default Variations;
