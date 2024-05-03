import React from 'react'
import { authenticatedUser } from '../component/AuthForm'

const IndexPage = () => {
    return (
        <div className='mt-4'>
            <header>
                <h1>Assignment Overview</h1>
                <p> Create a React application that implements user authentication, routing for different sections of the application, and pagination for displaying a list of items. </p>
            </header>

            <main>
                <section>
                    <h2>Credentials For Mocking the Authentication:</h2>
                    <p>Email : {authenticatedUser.email}</p>
                    <p>Password : {authenticatedUser.password}</p>
                </section>





            </main>
        </div>
    )
}

export default IndexPage