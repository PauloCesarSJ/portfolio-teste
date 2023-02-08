import { useEffect, useState } from "react";
import UserLocalStorageState from "./index";



function BUttondark () {
    const [mode, setmode] = UserLocalStorageState("mode", "lightmode");

    useEffect(() => {
        document.body.className = mode;
    }, [mode]
    
    )

    function ToggleMode(event:any) {
        setmode(event.target.value);
        console.log(mode)
    }

    return (
        <div className="BUttondark">
            <button className="text" id="buttonDarkMode" onClick={ToggleMode} value="darkMode">lua</button>
            <button className="text" id="buttonLightmode" onClick={ToggleMode} value="lightmode">sol</button>
        </div>
    )
}

export default BUttondark;