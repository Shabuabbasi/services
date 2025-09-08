export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      success: true,
      settings: {
        companyName: "Services",
        logoUrl: "/uploads/logo.png",
        footer: {
          email: "abbasi@gmail.com",
          phone: "123456",
          address: "Ajk District Bagh"
        }
      }
    });
  }

  if (req.method === "POST") {
    return res.status(200).json({ message: "Settings saved successfully!" });
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
