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
    if (!listId || !apiKey) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Missing Mailchimp configuration' }),
        };
    }
    try {

        const payload = {
            email_address,
            merge_fields,
            status: 'subscribed',
        }
        const authHeader = Buffer.from(`anystring:${apiKey}`).toString('base64');
        const {data} = await axios.post(`https://${apiKey?.split('-')[1]}.api.mailchimp.com/3.0/lists/${listId}/members`, payload, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${authHeader}`
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
