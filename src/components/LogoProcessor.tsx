import { Button } from "@/components/ui/button";
import { removeBackground, loadImage } from "@/utils/backgroundRemoval";

// Import the logos that need background removal
import logo2 from "@/assets/clients/logo2.png";
import logo3 from "@/assets/clients/logo3.png";  
import logo4 from "@/assets/clients/logo4.png";
import logo5 from "@/assets/clients/logo5.png";

const LogoProcessor = () => {
  const processLogo = async (logoPath: string, filename: string) => {
    try {
      console.log(`Processing ${filename}...`);
      
      // Fetch the image as blob
      const response = await fetch(logoPath);
      const imageBlob = await response.blob();
      
      // Convert blob to HTMLImageElement
      const imageElement = await loadImage(imageBlob);
      
      // Remove background
      const processedBlob = await removeBackground(imageElement);
      
      // Create download link
      const url = URL.createObjectURL(processedBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${filename}-transparent.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      console.log(`Successfully processed ${filename}`);
    } catch (error) {
      console.error(`Error processing ${filename}:`, error);
    }
  };

  const processAllLogos = async () => {
    const logos = [
      { path: logo2, name: 'logo2' },
      { path: logo3, name: 'logo3' },
      { path: logo4, name: 'logo4' },
      { path: logo5, name: 'logo5' }
    ];

    for (const logo of logos) {
      await processLogo(logo.path, logo.name);
      // Add a small delay between processing
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        onClick={processAllLogos}
        className="bg-red-600 hover:bg-red-700 text-white"
      >
        Remove Logo Backgrounds
      </Button>
    </div>
  );
};

export default LogoProcessor;