import { controllers } from "chart.js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SingleGraphic from "../components/graph/SingleGraphic";
import InputWithSlider from "../components/inputs/InputWithSlider";
import Table from "../components/table/Table";
import useWorkArea from "../hooks/useWorkArea";
const Variables = () => {
  const params = useParams();
  const navigate = useNavigate();
  const {
    testVariables,
    getTestVariables,
    editorVariables,
    getEditorVariables,
    EditEditorSemanal,
  } = useWorkArea();
  //   const [data, setData] = useState({});
  const [dataGraphic, setDataGraphic] = useState({});
  const [afectadas, setAfectadas] = useState({});
  const [dataEditorVariables, setDataEditorVariables] = useState({});
  const [dataTable, setDataTable] = useState([]);
  const [varAfectadas, setVarAfectadas] = useState([]);
  const [valueSlider, setValueSlider] = useState(() => {
    const valueSliderLocalStorage = JSON.parse(
      localStorage.getItem("valueSlider")
    );
    return valueSliderLocalStorage || 0;
  });
  useEffect(() => {
    const dataEditorVariablesLocalStorage = JSON.parse(
      localStorage.getItem("dataEditorVariables")
    );
    console.log("EditorVariables:", dataEditorVariablesLocalStorage);
    const { data } = dataEditorVariablesLocalStorage;
    console.log(data);
    setDataEditorVariables(data?.deslizante);
    setDataGraphic({ serie_A: data?.serie_A, serie_B: data?.serie_B });
    setAfectadas(data?.afectadas);
  }, []);

  useEffect(() => {
    const dataTestVariablesLocalStorage = JSON.parse(
      localStorage.getItem("testVariables")
    );
    console.log("TestVariables:", dataTestVariablesLocalStorage);
    const { data } = dataTestVariablesLocalStorage;
    setVarAfectadas(data);
  }, []);

  useEffect(() => {
    const auth = localStorage.getItem("user");
    getEditorVariables({ variable: params.id, auth: JSON.parse(auth) });
  }, []);
  useEffect(() => {
    loadDataTable();
    const { data } = editorVariables;
    setDataEditorVariables(data?.deslizante);
  }, [editorVariables, testVariables, varAfectadas]);

  useEffect(() => {
    const dataTestVariablesLocalStorage = JSON.parse(
      localStorage.getItem("testVariables")
    );
    const { data } = dataTestVariablesLocalStorage;
    setVarAfectadas(data);
  }, [testVariables]);

  const handleTest = (value) => {
    const auth = localStorage.getItem("user");
    localStorage.setItem("valueSlider", JSON.stringify(value));
    getTestVariables({ value, variable: params.id, auth: JSON.parse(auth) });
  };

  const loadDataTable = () => {
    // console.log("load data", dataTable);
    setDataTable([
      {
        nombre_var: "vta_int",
        original: afectadas?.vta_int,
        afectado:
          varAfectadas?.filter((ele) => ele.var_afectada_name === "vta_int")[0]
            ?.var_afectada_value || null,
        variacion_porc: 0,
      },
      {
        nombre_var: "vta_nac",
        original: afectadas?.vta_nac,
        afectado:
          varAfectadas?.filter((ele) => ele.var_afectada_name === "vta_nac")[0]
            ?.var_afectada_value || null,
        variacion_porc: 0,
      },
      {
        nombre_var: "ingreso",
        original: afectadas?.ingreso,
        afectado:
          varAfectadas?.filter((ele) => ele.var_afectada_name === "ingreso")[0]
            ?.var_afectada_value || null,
        variacion_porc: 0,
      },
    ]);
    localStorage.setItem("dataTable", JSON.stringify(dataTable));
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  const headers = [
    "Variable",
    "Valor Original",
    "Valor Afectado",
    "Variación %",
  ];
  const percentageChange = (originalValue, affectedValue) => {
    const totalValue = ((affectedValue - originalValue) / originalValue) * 100;
    return parseFloat(totalValue.toFixed(2));
  };
  const transformedData = dataTable.map((row) => [
    row.nombre_var,
    row.original,
    row.afectado,
    (row.variacion_porc = percentageChange(row.original, row.afectado)),
  ]);
  const dataFinal = [...transformedData];
  const handleSaveValue = (value) => {
    localStorage.setItem(
      "valueEditorSemanal",
      JSON.stringify({ value, variable: params.id })
    );
    navigate("/work-area/editor");
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-4">
        <h1 className="pb-4">
          <a
            className="px-2 text-xl font-semibold 
            text-blue-900 hover:text-blue-600 cursor-pointer"
            onClick={handleGoBack}
          >
            Editor
          </a>
          |
          <a
            className="px-2 text-xl font-semibold 
            text-blue-600 "
          >
            Variables
          </a>
        </h1>
        <div className=" m-4 col-span-1 sm:col-span-4 p-8 bg-white rounded-xl ">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-1">
              {" "}
              <SingleGraphic data={dataGraphic} />{" "}
            </div>
            <div className="col-span-1">
              <Table headers={headers} data={dataFinal} specialCell={3} />
            </div>
            <div className="col-span-1 row-span-2">
              <InputWithSlider
                onTest={handleTest}
                onGuardarValor={handleSaveValue}
                initialValue={valueSlider}
                sliderRange={dataEditorVariables}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Variables;
