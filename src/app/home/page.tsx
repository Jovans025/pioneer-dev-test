'use client'

import Search from "@/components/Search";
import { formatQuery } from "@/app/services/openai";
import { useState } from "react";

function Home() {

    const [isLoading, setIsLoading] = useState(false)

    const onSearch = async (query: string) => {
        setIsLoading(true)
        const result = await formatQuery(query)
        console.log(result)
        setIsLoading(false)
    }

    return (
        <div className="max-w-2xl mx-auto py-12">  
            <h1 className="text-2xl font-bold text-center">Restaurant Finder</h1>

             <Search onSubmit={onSearch} isLoading={isLoading}/>
        </div>
    );
}

export default Home;