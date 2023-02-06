import { Tabs, Tab } from "../components/tabs/Tabs";
import General from "../components/subPages/General";
import Variations from "../components/subPages/Variations";
import useWorkArea from "../hooks/useWorkArea";

import { useEffect } from "react";

const MainMenu = () => {
  const { loading } = useWorkArea();

  return (
    <>
      {loading && <div className="">Loading...</div>}

      <div className="mx-auto z-10">
        <Tabs>
          <Tab title="General">
            <General />
          </Tab>
          <Tab title="Variaciones">
            <Variations />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default MainMenu;
