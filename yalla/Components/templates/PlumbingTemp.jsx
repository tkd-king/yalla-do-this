import React from 'react'
import "../../app/globals.css"
import PlumbingBanner from '../organisms/PlumbingBanner'
import Headermain from '../organisms/Headermain'
import PlumberQuality from '../organisms/PlumberQuality'
import PlumbingOffer from '../organisms/PlumbingOffer'
import PlumberResponse from '../organisms/PlumberResponse'
import Customers from '../organisms/Customers'
import PlumberContact from '../organisms/PlumberContact'

const PlumbingTemp = () => {
    return (
        <div>
            <Headermain />
            <PlumbingBanner />
            <PlumberQuality />
            <PlumbingOffer />
            <PlumberResponse />
            <Customers />
            <PlumberContact />
        </div>
    )
}

export default PlumbingTemp