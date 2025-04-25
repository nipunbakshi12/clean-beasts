import React from 'react'
import './Varities.css'

function Varities() {
    function Card(props) {
        return (
            <div className='varity-cards' style={{
                border: '2px solid black',
                borderRadius: '20px',
                margin: '20px 20px'
            }}>
                <img src={props.image} style={{
                    width: '80%',
                    height: '120px',
                    marginTop: '12px',
                    borderRadius: '20px'
                }} />
                <h5>{props.title}</h5>
                <h5>★: {props.stars}</h5>
            </div>
        )
    }
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            margin: '0 75px'
        }}>
            <Card image="https://broomees.com/attachments/services/edec0091f4348c22a0b08c5a10cef4d5.jpg" title="Domestic Help"  stars="4.3"/>
            <Card image="https://broomees.com/attachments/services/130359605e8fb04bd76de91901a716bb.jpg" title="Cooks" stars="4.8"/>
            <Card image="https://broomees.com/attachments/services/cd253c39bd16fcdf8835ff502fec9273.jpg" title="BabySitter" stars="4.9"/>
            <Card image="https://broomees.com/attachments/services/1479774c17e06bb1d377ad8b9a2d80ac.png" title="All Rounder" stars="4.7"/>
        </div>
    )
}

export default Varities