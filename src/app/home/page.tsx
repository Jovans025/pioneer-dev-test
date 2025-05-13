'use client'

import Search from "@/components/SearchForm";
import { formatQuery } from "@/app/services/openai";
import {getPlaces} from "@/app/services/foursquare"
import {SearchResult} from "@/components/SearchResult";
import { useState } from "react";

function Home() {

    const [isLoading, setIsLoading] = useState(false)
    const [places, setPlaces] = useState<Place[]>([])
    const [error, setError] = useState<string>('')

    const onSearch = async (query: string) => {
        try{
            setError('')
            setIsLoading(true)
            const result = await formatQuery(query)
            const places = await getPlaces(result)
            setPlaces(places?.results || [])
            setIsLoading(false)
        }catch(error){
            setError('Something went wrong. Please try again later.')
            setIsLoading(false)
        }
    }

    console.log("places",places)

    return (
        <div className="max-w-2xl mx-auto py-12">  
            <h1 className="text-2xl font-bold text-center">Restaurant Finder</h1>

             <Search onSubmit={onSearch} isLoading={isLoading}/>

             {
                error && <div className="bg-red-500/60 text-white p-4 text-center mt-4 rounded">{error}</div>
             }

             <div className="mt-8">

                {places.length>0 && (
                  <p className="my-3 text-bold">Found {places.length} results</p>  
                )}

                {places.map((place: Place) => (
                    <SearchResult key={place.fsq_id} place={place} />
                ))}
            </div>
        </div>
    );
}

export default Home;