import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  const indexRole = roles.findIndex((listRoles)=>{listRoles == role}) 
  const indexActivity = activities.findIndex((listOfActivity)=>{listOfActivity == activity}) 
  if (indexRole <= indexActivity) return true
  else return false
};

export default useIsVerified;
