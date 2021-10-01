
import { stringify } from '@firebase/util';
import React, {useRef,useState} from 'react'
import {Form, Button,Card,Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from './contexts/AuthContext'
export default function Home() {
    const {logout, currentUser} = useAuth()
    

    return (
        
        <Card>
            <div className="w-100 text-center mt-2">
                <Button  onClick={logout}>Logout</Button>
            </div>
        </Card>
    )
}
