"use client";

import { useEffect, useRef } from "react";

export default function DashPortrait() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = new Image();
        img.src = "/images/profil.png";
        img.crossOrigin = "anonymous";

        img.onload = () => {
            const SIZE = 420;
            canvas.width = SIZE;
            canvas.height = SIZE;
            const scale = Math.max(
                SIZE / img.width,
                SIZE / img.height
            );

            const x = (SIZE - img.width * scale) / 2;
            const y = (SIZE - img.height * scale) / 2;

            ctx.drawImage(
                img,
                x,
                y,
                img.width * scale,
                img.height * scale
            );

            const imageData = ctx.getImageData(0, 0, SIZE, SIZE);
            const data = imageData.data;

            ctx.clearRect(0, 0, SIZE, SIZE);

            ctx.strokeStyle = "rgba(8, 187, 246, 0.9)";
            ctx.lineCap = "round";
            ctx.lineWidth = 1;

            const GAP = 5;
            const MAX_LEN = 10;

            for (let y = 0; y < SIZE; y += GAP) {
                for (let x = 0; x < SIZE; x += GAP) {
                    const i = (y * SIZE + x) * 4;

                    const r = data[i];
                    const g = data[i + 1];
                    const b = data[i + 2];

                    const luminance =
                        0.2126 * r +
                        0.7152 * g +
                        0.0722 * b;

                    if (luminance > 185) continue;

                    const len =
                        ((255 - luminance) / 255) * MAX_LEN;

                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + len, y);
                    ctx.stroke();
                }
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-[420px] h-[420px] drop-shadow-[0_0_25px_rgba(8,187,246,0.25)]"
        />

    );
}
