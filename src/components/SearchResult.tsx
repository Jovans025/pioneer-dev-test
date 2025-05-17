    

import moment from "moment";

export function SearchResult({ place }: { place: Place }) {
    return (
        <div key={place.fsq_id} className="flex bg-white p-4 rounded shadow mb-4">
            <div className="w-1/2">
                <h2 className="text-lg font-bold">{place.name}</h2>
                <h2 className="text-gray-600">{place.description}</h2>
                <p className="text-gray-600">{place.location.address}</p>
                <p className="text-gray-600">{place.categories[0].name}</p>
                <p className="text-gray-600">{place.rating}</p>
                 <p className="text-gray-600">{place.price}</p> 
            </div>
            <div className="w-1/2 text-right text-sm"> 
                {place?.hours_popular?.map?.((hour: any) => (
                    <p key={hour.day} className="text-gray-600">{moment().day(hour.day).format('ddd')} {hour.open} - {hour.close}</p>
                ))} 
            </div>
        </div>
    );
}