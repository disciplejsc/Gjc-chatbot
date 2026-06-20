const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Base de réponses intelligente
function getReply(message) {
    const msg = message.toLowerCase();

    // FR
    if (msg.includes("commande")) {
        return "Veuillez fournir votre numéro de commande pour suivi.";
    }

    if (msg.includes("livraison")) {
        return "Livraison à Abidjan : le jour même, 24h ou 48h (payante).";
    }

    if (msg.includes("prix")) {
        return "Les prix sont visibles directement sur chaque produit.";
    }

    // EN
    if (msg.includes("order")) {
        return "Please provide your order number for tracking.";
    }

    if (msg.includes("delivery")) {
        return "We deliver in Abidjan: same day, 24h or 48h (paid delivery).";
    }

    return "Je ne comprends pas bien. Contact WhatsApp: +2250769294818";
}

// API chatbot
app.post("/chat", (req, res) => {
    const userMessage = req.body.message;
    const reply = getReply(userMessage);
    res.json({ reply });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));