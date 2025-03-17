// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         const response = await fetch("https://api.trustpilot.com/v1/reviews/business-unit/YOUR_BUSINESS_ID", {
//             headers: {
//                 Authorization: `Bearer YOUR_TRUSTPILOT_API_KEY`
//             }
//         });

//         if (!response.ok) {
//             throw new Error("Failed to fetch Trustpilot reviews");
//         }

//         const data = await response.json();

//         const reviews = data.reviews.map((review: any) => ({
//             customerName: review.consumer.displayName,
//             stars: review.stars,
//             text: review.text
//         }));

//         res.status(200).json({ reviews });
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching Trustpilot reviews" });
//     }
// }
