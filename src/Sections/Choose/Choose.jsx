import React from 'react'

function Choose() {
    return (
        <div style={{
            margin: '30px 0'
        }}>
            <h1>Why Choose Us</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridGap: '30px'
            }}>
                <div className='safety'>
                    <img src='https://broomees.com/assets/images/icon_reliable.png' />
                    <h3>Experienced and Reliable</h3>
                    <p>We're not an agency, but a young startup run by a passionate group of professionals</p>
                </div>
                <div className='pricing'>
                    <img src='https://broomees.com/assets/images/icon_affordable.png' />
                    <h3>Transparent Pricing</h3>
                    <p>You get what you pay for. Additionally, you get replacement guarantee, Covid-19 test reports, verification documents and more!</p>
                </div>
                <div className='support'>
                    <img src='https://broomees.com/assets/images/icon_customer.png' />
                    <h3>Customer Support</h3>
                    <p>Our executives will always be there to hear you out and solve you issues</p>
                </div>
            </div>
        </div>
    )
}

export default Choose