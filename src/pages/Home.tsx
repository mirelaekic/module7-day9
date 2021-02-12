import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import  NavBar  from "../components/NavBar/NavBar";
import Artist from "../components/Fetch/Artist"

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                    <Artist/>
            </div>
        )
    }
}
