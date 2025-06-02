const https = require('https');
const fs = require('fs');
const path = require('path');

// Image URLs from Unsplash (free to use, high-quality images)
const images = {
    'shopify-dev': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
    'shopify-dev-hero': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
    'web-dev': 'https://images.unsplash.com/photo-1547658719-da2b51169166',
    'web-dev-hero': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    'mobile-dev': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
    'mobile-dev-hero': 'https://images.unsplash.com/photo-1526498460520-4c246339dccb',
    'digital-marketing': 'https://images.unsplash.com/photo-1533750349088-cd871a92f312',
    'digital-marketing-hero': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    'shopify-custom': 'https://images.unsplash.com/photo-1607082349566-187342175e2f',
    'shopify-custom-hero': 'https://images.unsplash.com/photo-1559526324-593bc073d938',
    'ecommerce-strategy': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    'ecommerce-strategy-hero': 'https://images.unsplash.com/photo-1553877522-43269d4ea984',
    'ui-ux': 'https://images.unsplash.com/photo-1586936893354-362ad6ae47ba',
    'ui-ux-hero': 'https://images.unsplash.com/photo-1545235617-9465d2a55698',
    'content-marketing': 'https://images.unsplash.com/photo-1542435503-956c469947f6',
    'content-marketing-hero': 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f'
};

// Create services directory if it doesn't exist
const servicesDir = path.join(__dirname, '../public/services');
if (!fs.existsSync(servicesDir)) {
    fs.mkdirSync(servicesDir, { recursive: true });
}

// Download images
Object.entries(images).forEach(([name, url]) => {
    const filename = path.join(servicesDir, `${name}.jpg`);

    // Add quality and size parameters to URL
    const imageUrl = `${url}?q=85&w=1200&fit=max`;

    https.get(imageUrl, (response) => {
        const fileStream = fs.createWriteStream(filename);
        response.pipe(fileStream);

        fileStream.on('finish', () => {
            console.log(`Downloaded: ${name}.jpg`);
            fileStream.close();
        });
    }).on('error', (err) => {
        console.error(`Error downloading ${name}.jpg:`, err.message);
    });
}); 