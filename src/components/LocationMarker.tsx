import {Icon} from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert'

type LocationMarkerProps = {
  lat: number;
  lng: number;
  onClick: () => void;
};

const LocationMarker = ({ lat, lng, onClick }: LocationMarkerProps) => {
  return (
    <div className='location-marker' onClick={onClick} >
      <Icon icon={locationIcon} className='location-icon'/>
    </div>
  )
}

export default LocationMarker