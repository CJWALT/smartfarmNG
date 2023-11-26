import React from 'react'

const Button = ({children, icon, btnWidth, bgBtn, btnHover, logInClick, fntColor}) =>{


    const btnColor = ['bg-[#065146]', 'outlined', 'bg-[#065146]']
    const txtColor = ['text-white', 'green']
    const btnSize = ['large', 'py-[.8rem] px-[4.2rem]']
    const hovBtn = ['hover:bg-[#065146] hover:text-white', 'null' ]

    const  colorBtn = btnColor.includes(bgBtn) ? `${bgBtn}` : 'bg-white'; 
    const colorTxt = txtColor.includes(fntColor) ? `${fntColor}` : 'text-black'
    const sizeBtn = btnSize.includes(btnWidth) ? `${btnSize}` : 'w-full';
    const BtnHover = hovBtn.includes(btnHover) ? `${hovBtn}` : null ;
    




    return(
        <>
        <div>
            <button
            onClick={logInClick}
            className={`font-medium flex flex-row justify-center items-center gap-[.6rem] rounded-[.5rem] font-[Lato] py-[.8rem] ${btnHover} ${colorBtn} ${colorTxt} ${sizeBtn}` }>
                {icon} {children} 
                </button>    
        </div>
            
        </>
    )
    
}

export default Button;