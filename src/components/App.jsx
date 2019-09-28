import React, { Component } from 'react'
import Picture from './Picture'

import './style.css'

class App extends Component {
    
    state = {
        picture: ''
    }

    createPp = (event)=>{

        event.preventDefault()
        let _name = this.name.value
        this.setState({
            picture: _name
        })

        this.name.value = ''
    }

    render() {
        return (
            <div className="container mt-5 background">
                <center>
                    <form>
                        <div className="pt-5 w-50">
                            <input ref ={ (input) =>{this.name = input}} type="text" className="form-control" placeholder="Type your name here..."/>
                        </div>
                        <div className="pt-3">
                            <button className="btn btn-success" onClick={this.createPp}>Create Your Profile Picture!</button>
                        </div>
                    </form>
                    <Picture data = {this.state.picture}/>
                </center>
            </div>
        )
    }
}

export default App
