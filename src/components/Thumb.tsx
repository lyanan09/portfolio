import { useState } from "react";

interface ThumbProps {
  id: string;
  name: string;
  cover: string;
  position: string;
  size: string;
  style?: React.CSSProperties;
  onClick: (id: string) => void;
}

export default function Thumb({
  id,
  name,
  cover,
  position,
  size,
  style,
  onClick,
}: ThumbProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.3, y: y * 0.3 });
  };

  return (
    <div
      className={`thumb-container absolute ${position} cursor-pointer group`}
      style={{
        animationDelay: `${Math.random() * 0.4}s`,
      }}
      onClick={() => onClick(id)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
    >
      <div
        className="relative transition-transform duration-150"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      >
        <img
          src={cover}
          alt={name}
          className={`${size} object-cover shadow-lg`}
        />
        <div className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-md p-3">
          {name}
        </div>
      </div>
    </div>
  );
}
