import express from "express";

const app = express();

// Endpoint for scanning
app.get("/scan", (req, res) => {
  const host = req.query.sni;
  const net = req.query.net;

  // Example mock data (replace with actual scan logic)
  const openPorts = [80, 443];  // Mock open ports
  const blockedPorts = [];      // Mock blocked ports

  // Sending the response as JSON
  res.json({
    host,
    ssl: "Yes",                 // Mock SSL status
    country: "UK",               // Mock country (United Kingdom)
    server: "CloudFront",        // Mock server (CloudFront CDN)
    networkMatch: net,
    openPorts: openPorts,
    blocked: blockedPorts,
    methods: ["SSL", "V2Ray", "HTTP"]  // Example methods
  });
});

// Listen on port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
