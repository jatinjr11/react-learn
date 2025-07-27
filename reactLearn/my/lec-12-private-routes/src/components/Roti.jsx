import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'


const Roti = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />

                {/* Protected route */}
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </>
    )
}

export default Roti