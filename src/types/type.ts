import Person from "../data/roles.json";

export interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity: string;
}

interface State {
  role: string;
  floorAccess: Boolean[];
}

export const initialState: State = {
  role: Person[0],
  floorAccess: [false, false, false, false, false],
};
