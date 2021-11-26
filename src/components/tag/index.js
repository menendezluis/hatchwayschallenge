import React from 'react'
import './style.css'
 const Tag = ({children}) => {
    
    return (
        
          <div className="chip">
            {children}
              <span className="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
            </div>
     
    )
}

export default Tag