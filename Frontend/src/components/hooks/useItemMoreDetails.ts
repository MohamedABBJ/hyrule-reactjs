import { create } from "zustand";
import ObtainedValues from "../../interfaces/obtainedValues";
import { useShallow } from "zustand/react/shallow";


const useItemMoreDetails = create((set) =>({
    itemSelected:{},
    setItemSelected: (itemSelected) => set({itemSelected})
}))

export default useItemMoreDetails