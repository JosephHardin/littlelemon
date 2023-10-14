import {useContext, useState} from 'react';
import {HomeContext} from "../Context";
function  GoHome(){

}

function GoReserve(){


}



function Nav(){
    const [home, setHome] = useContext(HomeContext);
    return (
        <div>
        <nav>

            <HomeContext.Provider value={home}>

                <button onClick={() => {
                    setHome('light');
                }}>
                    Switch to light theme
                </button>
            </HomeContext.Provider>

        </nav>


        </div>
    )


}

export default Nav