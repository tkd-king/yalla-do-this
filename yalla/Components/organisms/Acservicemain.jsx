import React from 'react'
import Container from '../atoms/Container'
import Acbanner from '../moleculus/Acbanner'
import AcAll from './AcAll'
import Servicenow from '../moleculus/Servicenow'

function Acservicemain() {
  return (
    <div>
        
            <div>
                {/* <Acbanner/> */}
                <AcAll/>
                  
                    <Servicenow/>
            </div>
    </div>
  )
}

export default Acservicemain