import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { query } = await req.json();

        const thread = await openai.beta.threads.create();
        
        await openai.beta.threads.messages.create(
            thread.id,
            {
                role: 'user',
                content: query,
            }
        );

        const run = await openai.beta.threads.runs.create(thread.id, {
            assistant_id: process.env.OPENAI_ASSISTANT_ID as string
        });

        while (true) {
            const runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
            
            if (runStatus.status === 'completed') {
                break;
            } 
            
            if (runStatus.status === 'failed' || runStatus.status === 'cancelled' || runStatus.status === 'expired') {
                throw new Error(`Run failed with status: ${runStatus.status}`);
            }
            
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        const messages = await openai.beta.threads.messages.list(thread.id);
        const assistantMessage = messages.data.find(msg => msg.role === 'assistant');
        
        if (!assistantMessage || !assistantMessage.content?.[0]) {
            throw new Error('No response from assistant');
        }

        const response = assistantMessage.content?.[0]?.type === 'text' ? 
            JSON.parse(assistantMessage.content?.[0]?.text?.value) : 
            '';

        return NextResponse.json({ data: response });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
    }
}