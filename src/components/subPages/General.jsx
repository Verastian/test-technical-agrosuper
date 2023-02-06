import { useEffect, useState } from "react";
import useWorkArea from "../../hooks/useWorkArea";
import FilterData from "../forms/FilterData";
import Graphics from "./Graphics";

const General = () => {
  const { getProjections, projections, setAuth } = useWorkArea();
  const [showUSDTON, setShowUSDTON] = useState(false);
  const [showUSDM, setShowUSDM] = useState(false);
  const [initialDate, setInitialDate] = useState({});
  const [endDate, setEndDate] = useState({});

  useEffect(() => {
    const auth = localStorage.getItem("user");
    setAuth(JSON.parse(auth));
    const query = {
      initial_date: initialDate,
      end_date: endDate,
    };
    getProjections({ query });
    console.log("render GENERAL ", auth);
  }, [initialDate, endDate]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-4">
        <div className="m-4 sol-span-1 flex h-[500px]  flex-col justify-between rounded-xl bg-white p-8">
          <FilterData
            setInitialDate={setInitialDate}
            setEndDate={setEndDate}
            chekOne={setShowUSDM}
            chekTwo={setShowUSDTON}
          />
        </div>

        <div className=" m-4 col-span-1 sm:col-span-3 p-8 bg-white rounded-xl ">
          <Graphics
            data={projections}
            onChekOne={showUSDTON}
            onChekTwo={showUSDM}
          />
        </div>
      </div>
    </>
  );
};

export default General;
