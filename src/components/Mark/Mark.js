import React from 'react'
import Marquee from "react-fast-marquee";

export default function Mark() {
    return (
        <div style={{background: 'orange', marginTop: '30px'}}>
            <Marquee>
                <div style={{padding: '20px', fontSize: '20px'}}>
                    Leading Quality Bags Distributors With Amazing Brands
                </div>
            </Marquee>
        </div>
    )
}
