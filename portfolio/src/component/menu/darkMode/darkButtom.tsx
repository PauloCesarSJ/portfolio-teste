import { useEffect } from "react";
import UserLocalStorageState from "./index";



function BUttondark () {
    const [mode, setmode] = UserLocalStorageState("mode", "lightmode");

    useEffect(() => {
        document.body.className = mode;
    }, [mode]
    
    )

    function ToggleMode(event:any) {
        setmode(event.target.value);
    }

    return (
        <div className="BUttondark">
            <button className="text" id="buttonDarkMode" onClick={ToggleMode} value="darkMode">TEMA</button>
            <button className="text" id="buttonLightmode" onClick={ToggleMode} value="lightmode">TEMA</button>
        </div>
    )
}

export default BUttondark;