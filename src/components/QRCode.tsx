import React, { useEffect, useRef } from "react";
import QRCode from "qrcode";

interface QRCodeProps {
  url: string;
  size?: number;
  className?: string;
}

const QRCodeComponent: React.FC<QRCodeProps> = ({ 
  url, 
  size = 120, 
  className = "" 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, url, {
        width: size,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF"
        }
      });
    }
  }, [url, size]);

  return (
    <div className={`qr-code-container ${className}`}>
      <canvas ref={canvasRef} />
      <p className="qr-code-label">Open on Mobile</p>
    </div>
  );
};

export default QRCodeComponent;
