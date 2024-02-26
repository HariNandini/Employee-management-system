import React, { Component } from 'react'

export class Footer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    

  render() {
    return (
      <div>
        <footer className='footer'>
            <span className='text-muted'>
              Copyrights reserved to me. 
            </span>
        </footer>
      </div>
    )
  }
}

export default Footer
