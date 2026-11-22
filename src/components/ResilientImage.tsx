import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}

export function ResilientImage({ src, alt, className = '', caption }: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className="m-0">
      {hasError ? (
        <div
          role="img"
          aria-label={alt}
          className={`flex flex-col items-center justify-center gap-3 bg-stone-100 border border-stone-200 text-stone-500 p-6 text-center ${className}`}
        >
          <ImageOff className="w-7 h-7 text-stone-400" strokeWidth={1.5} />
          <p className="text-sm font-medium text-stone-700 max-w-xs">{alt}</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={className}
        />
      )}
      {caption && (
        <figcaption className="mt-2.5 text-xs text-stone-500 leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
