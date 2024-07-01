import { create } from "zustand";
import ObtainedValues from "../../interfaces/obtainedValues";
import { useShallow } from "zustand/react/shallow";

interface ItemMoreDetails{
    itemSelected:ObtainedValues,
    setItemSelected:(valuesObtained:ObtainedValues) => void
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

const useItemMoreDetails = create<ItemMoreDetails>(() =>({
    itemSelected:valuesGetted,
    setItemSelected: ((valuesObtained) => ({itemSelected : valuesObtained}))
}))

export default useItemMoreDetails