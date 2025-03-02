import os
import requests
from urllib.parse import urlparse
from pathlib import Path

def download_images(image_urls, output_directory):
    """
    Download images from URLs and save them to the specified directory.
    
    Args:
        image_urls (list): List of image URLs to download
        output_directory (str): Directory to save the downloaded images
    """
    # Create the output directory if it doesn't exist
    Path(output_directory).mkdir(parents=True, exist_ok=True)
    
    for url in image_urls:
        try:
            # Get the filename from the URL
            parsed_url = urlparse(url)
            filename = os.path.basename(parsed_url.path)
            
            # Create the full output path
            output_path = os.path.join(output_directory, filename)
            
            # Download the image
            print(f"Downloading {url} to {output_path}...")
            response = requests.get(url, stream=True)
            response.raise_for_status()  # Raise an exception for HTTP errors
            
            # Save the image
            with open(output_path, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)
            
            print(f"✓ Successfully downloaded {filename}")
            
        except requests.exceptions.RequestException as e:
            print(f"✗ Error downloading {url}: {e}")
        except Exception as e:
            print(f"✗ Unexpected error with {url}: {e}")

if __name__ == "__main__":
    # List of image URLs to download
    image_urls = [
        "https://camelai.com/assets/images/main-camelai.png",
        "https://camelai.com/assets/images/menu-button.png"
    ]
    
    # Output directory
    output_directory = "public/assets/images"
    
    # Download the images
    download_images(image_urls, output_directory)
    print("Download process completed.")