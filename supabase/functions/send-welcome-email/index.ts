import { createClient } from "npm:@supabase/supabase-js@2.39.7";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const emailTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Welcome to Kōkūn!</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h1 style="color: #E07A5F; text-align: center;">Welcome to Kōkūn!</h1>
  
  <p style="font-size: 16px; margin-bottom: 20px;">
    Thank you for joining the Kōkūn community! We're thrilled to have you with us on this transformative journey.
  </p>
  
  <p style="font-size: 16px; margin-bottom: 20px;">
    Your experiences hold immense power—the power to transform care not just for you, but for millions living with invisible conditions. At Kōkūn, we believe that every story matters, every experience counts, and together, we can create meaningful change.
  </p>
  
  <p style="font-size: 16px; margin-bottom: 20px;">
    We're building a world where invisible conditions are truly seen, understood, and healed. A world where your experiences aren't dismissed, where your pain isn't minimized, and where you have the power to reclaim your health on your terms.
  </p>
  
  <p style="font-size: 16px; margin-bottom: 20px;">
    We'll keep you updated on our progress and let you know when we're ready to welcome you to our platform. In the meantime, thank you for being part of this groundbreaking movement.
  </p>
  
  <div style="text-align: center; margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
    <p style="color: #666; font-size: 14px;">
      Kōkūn © 2025<br>
      <em>Making invisible conditions visible</em>
    </p>
  </div>
</body>
</html>`;

const plainTextTemplate = `Welcome to Kōkūn!

Thank you for joining the Kōkūn community! We're thrilled to have you with us on this transformative journey.

Your experiences hold immense power—the power to transform care not just for you, but for millions living with invisible conditions. At Kōkūn, we believe that every story matters, every experience counts, and together, we can create meaningful change.

We're building a world where invisible conditions are truly seen, understood, and healed. A world where your experiences aren't dismissed, where your pain isn't minimized, and where you have the power to reclaim your health on your terms.

We'll keep you updated on our progress and let you know when we're ready to welcome you to our platform. In the meantime, thank you for being part of this groundbreaking movement.

Kōkūn © 2025
Making invisible conditions visible`;

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
      textContent: plainTextTemplate,
      htmlContent: emailTemplate,
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
      JSON.stringify({ 
        error: "Failed to send email",
        details: error.message 
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});