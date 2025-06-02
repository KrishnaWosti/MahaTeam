const https = require('https');
const fs = require('fs');
const path = require('path');

// Create the services images directory if it doesn't exist
const servicesImagesDir = path.join(process.cwd(), 'public', 'services');
if (!fs.existsSync(servicesImagesDir)) {
    fs.mkdirSync(servicesImagesDir, { recursive: true });
}

// Service hero image URLs from Unsplash (high-quality, relevant images)
const imageUrls = {
    'marketplace-integration-hero.jpg': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', // E-commerce integration hero
    'web-dev-hero.jpg': 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80', // Web development hero
    'mobile-dev-hero.jpg': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80', // Mobile development hero
    'digital-marketing-hero.jpg': 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=1200&q=80', // Digital marketing hero
    'shopify-custom-hero.jpg': 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', // Shopify customization hero
    'ecommerce-strategy-hero.jpg': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', // E-commerce strategy hero
    'ui-ux-hero.jpg': 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=80', // UI/UX design hero
    'content-marketing-hero.jpg': 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80' // Content marketing hero
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
    console.log('Starting service hero image downloads...');

    for (const [filename, url] of Object.entries(imageUrls)) {
        try {
            await downloadImage(url, filename);
        } catch (error) {
            console.error(`Error downloading ${filename}:`, error.message);
        }
    }

    console.log('Finished downloading service hero images!');
}

downloadAllImages(); 