import { createClient } from "npm:@supabase/supabase-js@2.39.7";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const emailTemplate = `Your experiences hold the power to transform care—not just for you, but for
millions living with invisible conditions. Thank you for joining us on this journey!`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { email } = await req.json();

    // Send email using Supabase's built-in email service
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { error } = await supabaseClient.auth.admin.sendRawEmail({
      email,
      subject: "Welcome to Kōkūn!",
      textContent: emailTemplate,
      fromEmail: "info@kokun.space",
    });

    if (error) {
      console.error('Error sending email:', error);
      throw error;
    }

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});