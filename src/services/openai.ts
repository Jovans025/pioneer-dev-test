export const formatQuery = async (query: string): Promise<PlaceQuery> => {
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query })
        });

        if (!response.ok) {
            throw new Error('Failed to get response');
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}