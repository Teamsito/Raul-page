import {theme} from '../src/assets/css/theme'
export const getColor =(color = theme.primary) => { 
    if(color === 'primary')
      return theme.primary;
    if(color === 'danger') 
      return 'red'; 
    return color   
    }