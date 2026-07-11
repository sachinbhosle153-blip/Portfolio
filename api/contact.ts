export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, email, message } = req.body ?? {};
  if (!name || !email || !message) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "sachinbhosle153@gmail.com",
        reply_to: email,
        subject: `New portfolio inquiry from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      res.status(502).json({ error: "Email provider rejected the message", detail });
      return;
    }

    res.status(200).json({ ok: true });
  } catch {
    res.status(500).json({ error: "Failed to send message" });
  }
}
