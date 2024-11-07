import { useState, useEffect } from 'react';
import DataBuilding from "../data/building.json"

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  useEffect(() => {
    setBuildingData(DataBuilding)
  }, [])

  const getFloorByIndex = (floorIndex:number): Floor |undefined =>{
    return buildingData[floorIndex]
  }

  const getListOfActivities = ():string[]=>{
    return buildingData.map((floor)=>{return floor.activity})
  }

  return { buildingData, getFloorByIndex, getListOfActivities};
};

export default useBuildingData;
