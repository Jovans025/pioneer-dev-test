'use client'

import { useState } from "react";

function Search({onSubmit,isLoading}: {onSubmit: (query: string) => Promise<void>, isLoading: boolean}) {


    const [query, setQuery] = useState<string>("")

    return ( 
            <div className="flex  items-center justify-center mt-8  bg rounded">
                <form className='flex flex-col justify-between w-full bg-gray-100 p-4 rounded' onSubmit={(event) => {
                    event.preventDefault();
                    onSubmit(query)
                }}>
                    <textarea 
                        placeholder="Find any restaurant" 
                        className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:ring-0 focus:outline-none" 
                        rows={4} 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        required
                    />

                    <button type="submit" className="cursor-pointer bg-blue-500 text-white px-4 py-2  rounded mt-3 " disabled={isLoading}>{
                        isLoading ? 'Searching...' : 'Find'
                    }</button>
                </form>
            </div> 
    );
}

export default Search;