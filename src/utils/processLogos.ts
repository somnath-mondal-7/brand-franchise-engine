import { removeBackground, loadImage } from './backgroundRemoval';

// Convert image files to blobs for processing
const imageToBlob = async (imagePath: string): Promise<Blob> => {
  const response = await fetch(imagePath);
  return response.blob();
};

export const processLogosBackgroundRemoval = async () => {
  const logos = [
    { path: '/src/assets/clients/logo2.png', output: 'src/assets/clients/logo2-transparent.png' },
    { path: '/src/assets/clients/logo3.png', output: 'src/assets/clients/logo3-transparent.png' },
    { path: '/src/assets/clients/logo4.png', output: 'src/assets/clients/logo4-transparent.png' },
    { path: '/src/assets/clients/logo5.png', output: 'src/assets/clients/logo5-transparent.png' }
  ];

  for (const logo of logos) {
    try {
      console.log(`Processing ${logo.path}...`);
      
      // Load the image as blob
      const imageBlob = await imageToBlob(logo.path);
      
      // Convert blob to HTMLImageElement
      const imageElement = await loadImage(imageBlob);
      
      // Remove background
      const processedBlob = await removeBackground(imageElement);
      
      // Convert blob to base64 for download
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        
        // Create download link
        const link = document.createElement('a');
        link.href = base64;
        link.download = logo.output.split('/').pop() || 'logo.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log(`Successfully processed ${logo.path}`);
      };
      reader.readAsDataURL(processedBlob);
      
    } catch (error) {
      console.error(`Error processing ${logo.path}:`, error);
    }
  }
};