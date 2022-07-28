import React from 'react'

function BootingScreen(props) {

    return (
        <div style={(props.visible || props.isShutDown ? { zIndex: "100" } : { zIndex: "-20" })} className={(props.visible || props.isShutDown ? " visible opacity-100" : " invisible opacity-0 ") + " absolute duration-500 select-none flex flex-col justify-around items-center top-0 right-0 overflow-hidden m-0 p-0 h-screen w-screen bg-black"}>
            <img width="400px" height="400px" className="md:w-1/4 w-1/2" src="./themes/Yaru/status/cof_orange_hex.svg" alt="Arch Logo" />
            <div className="w-10 h-10 flex justify-center items-center rounded-full outline-none cursor-pointer" onClick={props.turnOn} >
                {(props.isShutDown
                    ? <div className="bg-white rounded-full flex justify-center items-center w-10 h-10 hover:bg-gray-300"><img width="32px" height="32px" className="w-8" src="./themes/Yaru/status/power-button.svg" alt="Power Button" /></div>
                    : <img width="40px" height="40px" className={" w-10 " + (props.visible ? " animate-spin " : "")} src="./themes/Yaru/status/process-working-symbolic.svg" alt="Process Symbol" />)}
            </div>
            <div className="text-white mb-4">
                <p className="text-4xl bg-gradient-to-r from-teal-600 to-emerald-600 text-transparent bg-clip-text">Booting system..</p>
            </div>
        </div>
    )
}

export default BootingScreen
