import React, { useEffect, useState } from "react";
import Table from "../components/table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faCheck,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useWorkArea from "../hooks/useWorkArea";

const Editor = () => {
  const { getEditorSemanal, updateEditorSemanal, setNotification } =
    useWorkArea();
  const [onbutton, setOnButton] = useState({ button: "Generar Reporte" });
  const [selectedElements, setSelectedElements] = useState([]);
  const [localStorageSelectedElements, setLocalStorageSelectedElements] =
    useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const auth = localStorage.getItem("user");
    getEditorSemanal({ auth: JSON.parse(auth) });
  }, []);
  useEffect(() => {
    const dataSelectedElementsLocalStorage = JSON.parse(
      localStorage.getItem("dataSelectedElements")
    );
    setLocalStorageSelectedElements(dataSelectedElementsLocalStorage || []);
  }, []);
  useEffect(() => {
    setSelectedElements(localStorageSelectedElements);
  }, [localStorageSelectedElements]);

  useEffect(() => {
    const dataEditorSemanalLocalStorage = JSON.parse(
      localStorage.getItem("dataEditorSemanal")
    );
    console.log("EditorVariables:", dataEditorSemanalLocalStorage);
    const { data } = dataEditorSemanalLocalStorage;
    console.log(data[0].status);
    setData(data);
  }, [updateEditorSemanal]);

  const handleReportGeneration = (repoData) => {
    console.log(repoData);
    setNotification({
      msg: `Reporte Generado`,
      type: `success`,
    });
    setTimeout(() => {
      setNotification({});
    }, 2000);
  };
  const handleEditClick = (nombre_var) => {
    if (selectedElements.includes(nombre_var)) {
      setLocalStorageSelectedElements(
        selectedElements.filter((e) => e !== nombre_var)
      );
    } else {
      setLocalStorageSelectedElements([...selectedElements, nombre_var]);
    }
  };
  useEffect(() => {
    localStorage.setItem(
      "dataSelectedElements",
      JSON.stringify(localStorageSelectedElements)
    );
  }, [localStorageSelectedElements]);

  const getStatusColor = (status) => {
    switch (status) {
      case "rojo":
        return "bg-red-500";
      case "amarillo":
        return "bg-yellow-500";
      case "verde":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };
  const transformedData = data.map((row) => {
    const rowCopy = JSON.parse(JSON.stringify(row));
    return [
      rowCopy.nombre_var,
      rowCopy.anterior,
      rowCopy.actual,
      rowCopy.variacion_porc,
      (rowCopy.status = (
        <div
          className={`rounded-full h-6 w-6 mx-auto ${getStatusColor(
            rowCopy.status
          )}`}
        />
      )),
      (rowCopy.editar = (
        <Link to={`${rowCopy.nombre_var}`}>
          <FontAwesomeIcon
            style={{ fontSize: "24px" }}
            icon={faEdit}
            className="my-auto px-2 hover:text-blue-500 focus:text-blue-700"
          />
        </Link>
      )),
      (rowCopy.ok = (
        <FontAwesomeIcon
          icon={faCheck}
          style={{ fontSize: "24px" }}
          className={`my-auto px-2 ${
            selectedElements.includes(rowCopy.nombre_var)
              ? "hover:text-green-500 text-green-700"
              : "hover:text-gray-500 focus:text-gray-700"
          }`}
          onClick={() => handleEditClick(rowCopy.nombre_var)}
        />
      )),
    ];
  });

  const headers = [
    "Nombre Variable",
    "Anterior",
    "Actual",
    "Variación Porcentual",
    "status",
    "Editar",
    "OK",
  ];

  const dataFinal = [...transformedData];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-4">
        {/* <div className="m-4 sol-span-1 flex h-[500px]  flex-col justify-between rounded-xl bg-white p-8"></div> */}
        <h1
          className="text-xl font-semibold pb-4
          text-blue-600 "
        >
          Editor
        </h1>
        <div className=" m-4 col-span-1 sm:col-span-4 p-8 bg-white rounded-xl ">
          <Table
            headers={headers}
            data={dataFinal}
            onbutton={onbutton}
            onReportGeneration={handleReportGeneration}
            enableButton={
              selectedElements.length === data.length ? true : false
            }
          />
        </div>
      </div>
    </>
  );
};

export default Editor;
