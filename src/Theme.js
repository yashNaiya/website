import { createTheme } from "@mui/material";

const theme = createTheme({
    typography:{
        fontFamily:'Lucida Sans',
    },
    palette:{
        background:{
            default:'#000000',
        },
        primary:{
            main:'#F9BE08',
        },
        secondary:{
            main:'#DFDFD9'
        },
        black:{
            main:'#000000'
        }
    },
    
})

export default theme;