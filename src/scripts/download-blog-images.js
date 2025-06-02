const https = require('https');
const fs = require('fs');
const path = require('path');

// Create the blog images directory if it doesn't exist
const blogImagesDir = path.join(process.cwd(), 'public', 'blog');
if (!fs.existsSync(blogImagesDir)) {
    fs.mkdirSync(blogImagesDir, { recursive: true });
}

// Blog image URLs from Unsplash (high-quality, relevant images)
const imageUrls = {
    'shopify-apps.jpg': 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80', // Shopify dashboard
    'seo-guide.jpg': 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=80', // SEO analytics
    'product-page.jpg': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', // E-commerce product
    'social-media.jpg': 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80', // Social media marketing
    'analytics.jpg': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', // Data analytics
    'shopify-custom.jpg': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80', // Custom design
    'ecommerce-strategy.jpg': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80', // Strategy planning
    'ui-ux.jpg': 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80', // UI/UX design
    'content-marketing.jpg': 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80', // Content creation
};

// Download function
const downloadImage = (url, filename) => {
    return new Promise((resolve, reject) => {
        const filepath = path.join(blogImagesDir, filename);

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
    console.log('Starting blog image downloads...');

    for (const [filename, url] of Object.entries(imageUrls)) {
        try {
            await downloadImage(url, filename);
        } catch (error) {
            console.error(`Error downloading ${filename}:`, error.message);
        }
    }

    console.log('Finished downloading blog images!');
}

downloadAllImages(); 