import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

interface IPrivateRoute {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IPrivateRoute) => {
  const floorAccess = useSelector((person: { floorAccess: {floorAccess: [boolean, boolean, boolean, boolean, boolean]} }) => person.floorAccess.floorAccess);

 const { index } = useParams<{ index: string }>();
 const floorIndex = parseInt(index || "0");
 const navigate = useNavigate();
 
  useEffect(() => {
    if (floorAccess[floorIndex] === false) {
      navigate("/Forbidden")
    }
  }, []);

  return <>{children}</>;
};

export default PrivateRoute;
