import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Image as ImageIcon, Trash2, Copy, Download } from 'lucide-react';

interface ImagePreview {
  id: string;
  file: File;
  preview: string;
}

const UploadScreen: React.FC = () => {
  const [images, setImages] = useState<ImagePreview[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newImages = acceptedFiles.map(file => ({
      id: Math.random().toString(36).substring(7),
      file,
      preview: URL.createObjectURL(file)
    }));
    setImages(prev => [...prev, ...newImages]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    }
  });

  const removeImage = (id: string) => {
    setImages(prev => {
      const filtered = prev.filter(img => img.id !== id);
      prev.find(img => img.id === id)?.preview && URL.revokeObjectURL(prev.find(img => img.id === id)!.preview);
      return filtered;
    });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <button className="text-blue-600 hover:text-blue-700">
            <span className="flex items-center">
              <span className="mr-2">←</span> All Projects
            </span>
          </button>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Get Code
        </button>
      </div>

      <div {...getRootProps()} className="mb-6">
        <input {...getInputProps()} />
        <div className={`border-2 border-dashed rounded-lg p-8 text-center ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}>
          <ImageIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-600">Drag and drop images here, or click to select files</p>
          <p className="text-sm text-gray-500 mt-2">Supported formats: JPEG, PNG</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative group">
            <div className="aspect-square border border-gray-200 rounded-lg overflow-hidden bg-white">
              <img
                src={image.preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
              <button
                onClick={() => removeImage(image.id)}
                className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
              >
                <Trash2 className="h-4 w-4 text-red-600" />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                <Copy className="h-4 w-4 text-gray-600" />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                <Download className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadScreen;