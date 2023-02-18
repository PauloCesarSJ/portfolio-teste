import { useEffect, useState } from "react";




    function UserLocalStorageState(key: any, initialState: any,  ) {
        const [value, setvalue] = useState(() => {
            const persistedValue = localStorage.getItem(key);
            return persistedValue !== null ? persistedValue : initialState;
       
        });
        
        
        useEffect(() => {
            localStorage.setItem(key, value);
        }, [key,value]);
        return [value, setvalue];
        
    }

    
    

export default UserLocalStorageState;