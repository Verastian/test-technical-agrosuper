import { useContext } from "react";
import WorkAreaProvider from "../context/WorkAreaProvider";

const useWorkArea = () => {
  return useContext(WorkAreaProvider);
};
export default useWorkArea;
