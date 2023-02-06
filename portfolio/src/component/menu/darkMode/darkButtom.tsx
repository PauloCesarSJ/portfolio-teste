import { useEffect, useState } from "react";
import UserLocalStorageState from "./index";



function BUttondark () {
    const [mode, setmode] = UserLocalStorageState("mode", "lightmode");

    useEffect(() => {
        document.body.className = mode;
    }, [mode])

    function ToggleMode(event:any) {
        setmode(event.target.value);
    }

    return (
        <div>
            <select onChange={ToggleMode} >
                <option onSelect={ToggleMode} selected value="darkMode">darkMode</option>
                <option onSelect={ToggleMode} selected value="lightmode">lightmode</option>
            </select>
        </div>
    )
}

export default BUttondark;