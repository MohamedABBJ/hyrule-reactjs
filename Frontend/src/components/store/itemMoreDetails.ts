import { create } from "zustand";
import ObtainedValues from "../../interfaces/obtainedValues";
import { useShallow } from "zustand/react/shallow";

interface ItemMoreDetails{
    mode:string,
    setMode:(mode:string) => void
    itemSelected:ObtainedValues,
    setItemSelected:(itemSelected:ObtainedValues) => void
}
const valuesGetted: ObtainedValues = {
    id:0,
    name:'',
    drops:[],
    description:'',
    category:'',
    image:'',
    state:false
  }

const useItemMoreDetails = create<ItemMoreDetails>((set) =>({
    mode:'sticky',
    setMode: ((mode) => set({mode})),
    itemSelected:valuesGetted,
    setItemSelected: ((itemSelected) => set({itemSelected}))
}))

export default useItemMoreDetails