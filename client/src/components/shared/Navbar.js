import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
    const history = useHistory();

    return (
        <nav className="flex fixed bg-green-200 w-full h-12 z-10" role="navigation" aria-label="main navigation">
            <div className="text-xl w-100 h-100 text-center px-3 flex justify-center items-center">
                <button className="font-bold text-green-900 " onClick={()=>{ history.push("/ana-sayfa")}} >
                    GDP
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
