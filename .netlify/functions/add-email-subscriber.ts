import axios from "axios";

const handler = async (event, context) => {
    const listId = '8f96df324b';
    const apiKey = 'd476adb51c4f1693593ba7a6a084a171-us8';

    const body = JSON.parse(event.body);
    const {email_address, merge_fields} = body;

    if (!email_address) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Email address is required' }),
        };
    }
    try {
        const payload = {
            email_address,
            merge_fields,
            status: 'subscribed',
        }
        const {data} = await axios.post(`https://us8.api.mailchimp.com/3.0/lists/${listId}/members`, payload, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${apiKey}`
            }
        });
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to subscribe user' }),
        }
    }
}
export { handler };