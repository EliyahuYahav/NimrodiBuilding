import Person from "../data/roles.json" 

export interface Auth {
    floor : string;
    access: boolean;
}

export interface Floor {
    name: string;
    soldiers: number;
    purpose: string;
    description: string;
    activity:string
  }

  interface State {
    person: string;
    access: Auth[]
  }

  export const initialState: State = {
    person: Person[0],
      access : [
         { floor: "First Floor", access: false },
         { floor: "Second Floor", access: false },
         { floor: "Third Floor", access: false },
         { floor: "Fourth Floor", access: false },
         { floor: "Fifth Floor", access: false }
        ]
  }