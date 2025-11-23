import axios from "axios";

export const handler = async (event, context) => {
    const listId = process.env.MAILCHIMP_LIST_ID;
    const apiKey = process.env.MAILCHIMP_API_KEY;

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
            body: JSON.stringify({ error: error.message  || 'Failed to subscribe user' }),
        }
    }
}
