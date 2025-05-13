import { Cloudinary } from '@cloudinary/url-gen';

// Initialize Cloudinary with your cloud name
const cld = new Cloudinary({
  cloud: {
    cloudName: 'YOUR_CLOUD_NAME' // Replace this with your actual cloud name from the dashboard
  }
});

export const getImageUrl = (publicId: string) => {
  return cld.image(publicId)
    .quality('auto')
    .format('auto')
    .toURL();
};

// Example usage:
// const heroImage = getImageUrl('kokun/hero-background');
// const aboutImage = getImageUrl('kokun/about-background');