import React from 'react'

export default function TravelList(props) {
    
    return(
        <div className='travel-list'>
            <img src={`${props.item.imageUrl}`} className='img-url'/>
            <div className='travel-infos'>
                <div className='location-infos'>
                    <img src="../images/mapIcon.png" className='map-icon'/>
                    <p className='location'>{props.item.location}</p>
                    <a className='location-link' href={`${props.item.googleMapsUrl}`} target='_blank'>View on Google Maps</a>
                </div>
                <h3 className='travel-title'>{props.item.title}</h3>
                <p className='date'>{props.item.startDate} - {props.item.endDate}</p>
                <p className='description'>{props.item.description}</p>
            </div>
           
        </div>
    )
}

/*

            */