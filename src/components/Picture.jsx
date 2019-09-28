import React, { Component } from 'react'
import './style.css'

export class Picture extends Component {
    
   profilePicture = () =>{
       let hasil = this.props.data
       if(hasil !== ''){
           return(
               <div >
                   <img className="style" src={`https://robohash.org/${hasil}?200x200`} alt = {hasil} />
               </div>
           )
       }
   }

    render() {
        return (
            <div className="mt-3">
                {this.profilePicture()}
            </div>
        )
    }
}

export default Picture
