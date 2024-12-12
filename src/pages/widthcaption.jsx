// src/components/ImageWithCaption.jsx
export default function ImageWithCaption({ src, alt, caption }) {
    return (
      <figure className="text-center">
        <img src={src} alt={alt} className="w-full h-auto rounded-md" />
        <figcaption className="text-gray-500 bg-gray-200 text-lg py-5 mb-10 -mt-2 text-muted">{caption}</figcaption>
      </figure>
    );
  }
  