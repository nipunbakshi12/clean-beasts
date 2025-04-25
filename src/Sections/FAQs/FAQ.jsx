import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function FAQ() {
    return (
        <div style={{
            width: '90%',
            margin: '20px auto'
        }}>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How can I hire a housemaid/baby sitter/cook from Clean Beasts?</Accordion.Header>
                    <Accordion.Body>
                        1: Choose your desired service, fill in your requirements and make a booking on our platform.<br />
                        2: Confirm your requirements with the relationship manager assigned to you.<br />
                        3: Sit tight while our relationship manager finds the right fit for your home.<br />
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>What if I'm not satisfied with the services?</Accordion.Header>
                    <Accordion.Body>
                        While all our helpers undergo an intensive assessment regime before being certified as a Broomee, we still believe that there's always room for improvement. In order to ensure that you obtain the optimum fit for your home, we provide an complimentary replacement policy as part of your subscription. Just reach out to your relationship manager or mail us at support@broomees.com.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>How much will a cook/maid/baby sitter cost in Delhi NCR?</Accordion.Header>
                    <Accordion.Body>
                        The average wage of our helpers is completely dependent on your requirements and location. It can vary anywhere between ₹4,000 to ₹25,000/per month.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Why do your services seem more expensive than other helpers in the market?</Accordion.Header>
                    <Accordion.Body>
                        Unlike maid services/agencies we don’t charge a hefty commission fee from our clients, just a nominal booking amount. The entire wage as estimated by our wage estimation matrix(based on the Minimum Wages Act Of 1948) is paid in full to the helper.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>Is a maid/cook/baby sitter from Clean Beasts reliable?</Accordion.Header>
                    <Accordion.Body>
                        Every Broomees helper goes through a thorough background check using their Aadhar and police records, and is only sent to your homes after a successful vetting process.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header>Is it safe to hire a maid/cook/baby sitter during the pandemic?</Accordion.Header>
                    <Accordion.Body>
                        In order to ensure your safety, every Broomees helper goes through a RT-PCR test and are sent to your home via a private cab.
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    )
}

export default FAQ
