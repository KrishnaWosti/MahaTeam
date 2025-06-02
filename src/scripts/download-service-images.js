const https = require('https');
const fs = require('fs');
const path = require('path');

// Create the services images directory if it doesn't exist
const servicesImagesDir = path.join(process.cwd(), 'public', 'services');
if (!fs.existsSync(servicesImagesDir)) {
    fs.mkdirSync(servicesImagesDir, { recursive: true });
}

// Service image URLs from Unsplash (high-quality, relevant images)
const imageUrls = {
    'marketplace-integration.jpg': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80', // E-commerce integration
    'web-dev.jpg': 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80', // Web development
    'mobile-dev.jpg': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', // Mobile development
    'digital-marketing.jpg': 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80', // Digital marketing
    'shopify-custom.jpg': 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80', // Shopify customization
    'ecommerce-strategy.jpg': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', // E-commerce strategy
    'ui-ux.jpg': 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80', // UI/UX design
    'content-marketing.jpg': 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80' // Content marketing
};

// Download function
const downloadImage = (url, filename) => {
    return new Promise((resolve, reject) => {
        const filepath = path.join(servicesImagesDir, filename);

        // Skip if file already exists
        if (fs.existsSync(filepath)) {
            console.log(`${filename} already exists, skipping...`);
            resolve();
            return;
        }

        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
                return;
            }

            const fileStream = fs.createWriteStream(filepath);
            response.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Downloaded ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
};

// Download all images
async function downloadAllImages() {
    console.log('Starting service image downloads...');

    for (const [filename, url] of Object.entries(imageUrls)) {
        try {
            await downloadImage(url, filename);
        } catch (error) {
            console.error(`Error downloading ${filename}:`, error.message);
        }
    }

    console.log('Finished downloading service images!');
}

downloadAllImages(); 