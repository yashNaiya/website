import { createTheme } from "@mui/material";

const theme = createTheme({
    typography:{
        fontFamily:'Lucida Sans',
    },
    palette:{
        background:{
            default:'#1d1d1d',
        },
        primary:{
            main:'#F9BE08',
        },
        secondary:{
            main:'#DFDFD9'
        },
        black:{
            main:'#1A1A19'
        }
    },
    
})

export default theme;