import os
from PIL import Image

# Base directory where your images are located
base_dir = "./"

# Function to convert image to webp format
def convert_to_webp(file_path):
    try:
        img = Image.open(file_path)
        webp_path = os.path.splitext(file_path)[0] + ".webp"
        img.save(webp_path, "WEBP")
        print(f"Converted {file_path} to {webp_path}")
    except Exception as e:
        print(f"Failed to convert {file_path}: {e}")

# Directories and file extensions to process
directories = [
    "Koordynatorzy",
    "Sekcja Organizacyjna",
    "Sekcja Promocji",
    "Sekcja Sponsorska",
    "Sekcja Techniczna"
]

# Supported file extensions
supported_extensions = [".jpg", ".jpeg", ".png", ".nef"]

# Loop through directories and convert images
for directory in directories:
    dir_path = os.path.join(base_dir, directory)
    for file_name in os.listdir(dir_path):
        file_path = os.path.join(dir_path, file_name)
        if os.path.splitext(file_name)[1].lower() in supported_extensions:
            convert_to_webp(file_path)

