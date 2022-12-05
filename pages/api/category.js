import nextConnect from "next-connect";
import middleware from "./config/mongo";

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
    
    res.json({
        items: []
    });
});

export default handler;