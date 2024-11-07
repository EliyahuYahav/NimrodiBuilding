import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "../store/store";
import Forbidden from "../pages/Forbidden/Forbidden";

interface IPrivateRoute {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IPrivateRoute) => {
  const { hasAccess } = useSelector(
    (state: RootState): any => state.floorAccess.access
  );

  const { index } = useParams<{ index: string }>();
  const floorIndex = parseInt(index || "0");

  useEffect(() => {
    if (!hasAccess[floorIndex]) {
        <Forbidden/>
    }
  }, []);

  return <>{children}</>;
};

export default PrivateRoute;
