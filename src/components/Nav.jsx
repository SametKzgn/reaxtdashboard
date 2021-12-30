import React from 'react'

function nav() {

    const sidebarCollapse = () => {


        const sidebar = document.querySelector(".side-bar");
        const Content = document.querySelector(".contentright");

        sidebar.classList.toggle("active");
        Content.classList.toggle("active");
    };


    return (
        <div className="nav-bar">
            <button className="nav-btn">
                <i className="fas fa-bars" onClick={sidebarCollapse} >
                </i> {/* burada ekledıgımız icon a on clıck  
degerı verıyoruz içine ise const da belırledıgımız degeri giriyoruz ki orda ki şeyleri çagırsın */}
            </button>

        </div>
    )
}

export default nav





