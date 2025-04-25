import React from 'react'
import Maids from './Maids'

function BookService() {
    return (
        <div>

            <div style={{
                margin: '20px auto'
            }}>
                <h1>Book your Service Easily</h1>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gridGap: '20px',
                    margin: '20px 10px',
                }}>
                    {Maids.map((d) => (
                        <div style={{
                            display: 'flex',
                            border: '2px solid black',
                            borderRadius: '18px',
                        }}>
                            <div>
                                <img src={d.image} style={{
                                    width: '85%',
                                    height: '280px',
                                    borderRadius: '20px'
                                }} />
                            </div>
                            <div>
                                <h3>{d.name}</h3>
                                <p>
                                    Location: {d.location}
                                </p>
                                <h6>
                                    Roles: {d.role}
                                </h6>
                                <p>
                                    Age: {d.age}
                                </p>
                                <p>
                                    Experience: {d.experience}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default BookService