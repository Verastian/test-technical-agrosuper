import { createContext, useEffect, useState } from "react";

const WorkAreaContext = createContext();

const WorkAreaProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({});
  const [user, setUser] = useState([]);
  const [projections, setProjections] = useState({});
  const [variations, setVariations] = useState({});
  const [editorVariables, setEditorVariables] = useState({});
  const [testVariables, setTestVariables] = useState({});
  const [auth, setAuth] = useState({});
  const [updateEditorSemanal, setUpdateEditorSemanal] = useState(false);

  useEffect(() => {}, []);

  //* GET PROJECTIONS
  const getProjections = async (data) => {
    setLoading(true);
    const { query } = data;
    if (!auth.token) return;
    const payload = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ auth, query }),
    };
    try {
      const response = await fetch(
        "https://f11.cl:8090/getCarnesRealProyeccion",
        payload
      );
      const data = await response.json();
      if (response.status === 200) {
        setProjections(data);
        localStorage.setItem("user", JSON.stringify(auth));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  // END GET PROJECTIONS
  //* END GET VARIATIONS
  const getVariations = async (values) => {
    if (!values.auth.token) return;
    const payload = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ auth: values.auth }),
    };
    try {
      const response = await fetch(
        "https://f11.cl:8090/obtenerVariaciones",
        payload
      );
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        // setVariations(data);
        localStorage.setItem("Variations", JSON.stringify(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  // END GET VARIATIONS

  //* GET VARIABLES
  const getTestVariables = async (values) => {
    if (!values.auth.token) return;
    const payload = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        auth: values.auth,
        var_name: values.variable,
        value_test: values.value,
      }),
    };
    try {
      const response = await fetch(
        "https://f11.cl:8090/probarVariable",
        payload
      );
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        setTestVariables(data);
        localStorage.setItem("testVariables", JSON.stringify(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  // END GET VARIABLES
  // *GET EDITOR VARIABLES
  const getEditorVariables = async (values) => {
    if (!values.auth.token) return;
    const payload = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        auth: values.auth,
        var_name: values.variable,
      }),
    };
    try {
      const response = await fetch(
        "https://f11.cl:8090/editorVariables",
        payload
      );
      const data = await response.json();
      if (response.status === 200) {
        setEditorVariables(data);
        localStorage.setItem("dataEditorVariables", JSON.stringify(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  // END GET EDITOR VARIABLES
  // *GET EDITOR SEMANAL
  const getEditorSemanal = async (values) => {
    if (!values.auth.token) return;
    const payload = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        auth: values.auth,
      }),
    };
    try {
      const response = await fetch(
        "https://f11.cl:8090/editorSemanal",
        payload
      );
      const data = await response.json();
      const updateData = { ...data };
      const updateValueEditorSemanal = JSON.parse(
        localStorage.getItem("valueEditorSemanal")
      );
      if (response.status !== 200) return;

      if (updateValueEditorSemanal) {
        updateData.data = updateValue(
          updateData.data,
          updateValueEditorSemanal.variable,
          updateValueEditorSemanal.value
        );
        setNotification({
          msg: `Se modifico el Valor de su ${updateValueEditorSemanal.variable}`,
          type: `success`,
        });
        localStorage.setItem("dataEditorSemanal", JSON.stringify(updateData));
        setUpdateEditorSemanal(true);
        // setTimeout(() => {
        //   setNotification({});
        // }, 2000);
      } else {
        localStorage.setItem("dataEditorSemanal", JSON.stringify(updateData));
      }
    } catch (error) {
      console.log(error);
    }
  };
  // END GET EDITOR SEMANAL
  // *UPDATE VALUE
  const updateValue = (data, name, newValue) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].nombre_var === name) {
        data[i].actual = parseInt(newValue);
        break;
      }
    }
    return data;
  };
  // END UPDATE VALUE

  return (
    <WorkAreaContext.Provider
      value={{
        loading,
        user,
        projections,
        variations,
        testVariables,
        editorVariables,
        updateEditorSemanal,
        notification,
        setNotification,
        setUpdateEditorSemanal,
        getProjections,
        getVariations,
        getTestVariables,
        getEditorVariables,
        getEditorSemanal,
        setAuth,
      }}
    >
      {children}
    </WorkAreaContext.Provider>
  );
};
export { WorkAreaProvider };
export default WorkAreaContext;
