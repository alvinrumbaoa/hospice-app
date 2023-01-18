import React, { useState } from 'react'
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/core'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        // Send a request to the server to authenticate the user
        // If the authentication is successful, redirect the user to the protected pages
        // otherwise, show an error message
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    isRequired 
                />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    isRequired 
                />
            </FormControl>
            <Button mt={4} variantColor="teal" type="submit">
                Login
            </Button>
        </form>
    )
}

export default Login