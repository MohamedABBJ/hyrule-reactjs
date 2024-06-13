"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const navbar_1 = __importDefault(require("../components/navbar/navbar"));
const useRequestOne_1 = require("../components/hooks/useRequestOne");
const HomePage = () => {
    const { dataObtained, setInputValue } = (0, useRequestOne_1.useRequestOne)();
    return (<>
        {/* Navbar Component */}
            <navbar_1.default props={'top'}/>
            
            {/*
    <Box sx={{backgroundRepeat:'no-repeat', backgroundSize:'cover',  backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images8.alphacoders.com/976/976005.jpg)"}} position={'relative'} width={'100%'}>
        <Box  height={'91vh'}  border={'solid black'} display={dataObtained.state ? 'none' : 'flex'} justifyContent={'center'} alignItems={'center'}>
         <SearchBar {...{setInputValue}}/>
        </Box>
        <Box height={'91vh'} border={'solid black'} display={dataObtained.state ? 'flex' : 'none'} justifyContent={'center'} alignItems={'center'}>
        <ObtainedSearchedData {...{dataObtained,setInputValue}}/>
        </Box>

    </Box>
         */}
        </>);
};
/*

*/
exports.default = HomePage;
