// pages/api/products.js
import { prisma } from "@/lib/db/prisma";

export default async function handler(req: any, res: any) {
    try {
        const products = await prisma.product.findMany({
            orderBy: { id: "desc" },
        });

        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
