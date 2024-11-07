import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  
  const indexOfRole = roles.findIndex((listRoles) => {
    return listRoles == role;
  });
  const indexOfActivity = activities.findIndex((listOfActivity) => {
    return listOfActivity == activity;
  });
  return (
    indexOfActivity !== -1 &&
    indexOfRole !== -1 &&
    indexOfRole >= indexOfActivity
  );
};

export default useIsVerified;
