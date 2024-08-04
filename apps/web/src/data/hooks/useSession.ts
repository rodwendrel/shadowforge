import { useContext } from "react";
import SessionContext from "../contexts/SessionContext";

const useSession = () => useContext(SessionContext)
export default useSession