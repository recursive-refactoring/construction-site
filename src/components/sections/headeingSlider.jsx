import React from 'react'

const HeadeingSlider = ({bg_color, dir}) => {
    return (
        <div className={`marquee-wrapper text-slider ${bg_color}`}>
            <div className={`marquee-inner ${dir}`}>
                <ul className="marqee-list d-flex">
                    <li className="marquee-item">
                        <span className="stroke-text">Leader in</span> Refractory <span className="stroke-text">Construction &</span>
                        Mechanical <span className="stroke-text">Services</span> Leader in
                        <span className="stroke-text">Refractory</span> Construction
                        &
                        <span className="stroke-text">Mechanical</span> Services <span className="stroke-text">Leader in</span>
                        Refractory <span className="stroke-text">Construction
                            &</span>
                        Mechanical <span className="stroke-text">Services</span> Leader in
                        <span className="stroke-text">Refractory</span> Construction
                        &
                        <span className="stroke-text">Mechanical</span> Services <span className="stroke-text">Leader in</span>
                        Refractory <span className="stroke-text">Construction
                            &</span>
                        Mechanical <span className="stroke-text">Services</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeadeingSlider