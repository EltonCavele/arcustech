"use client";
import React from "react";
import Image from "next/image";

export type PartnerImage = {
  id: string;
  src: string;
  alt?: string;
  href?: string;
};

type PartnersProps = {
  speed?: number;
  className?: string;
};

export const Partners: React.FC<PartnersProps> = ({ speed = 30 }) => {
  const IMAGENS = [
    {
      id: "pex-1298",
      src: "/img/slack.svg",
      alt: "Executivo estendendo a mão para aperto",
    },
    {
      id: "pex-1232",
      src: "/img/spotify.svg",
      alt: "Profissionais sorrindo em aperto de mão",
    },
  ];

  const loopImages = [...IMAGENS];

  return (
    <div className="overflow-hidden w-full bg-black py-20 ">
      <div
        className="flex items-center justify-center gap-10 animate-scroll"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {loopImages.map((img: any, idx) => (
          <div key={`${img.id}-${idx}`} className="flex-shrink-0">
            {img.href ? (
              <a href={img.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={img.src}
                  alt={img.alt}
                  className="h-10 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition"
                  loading="lazy"
                  width={200}
                  height={200}
                />
              </a>
            ) : (
              <img
                src={img.src}
                alt={img.alt}
                className=" md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>

      {/* <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          width: max-content;
          animation: scroll linear infinite;
        }
      `}</style> */}
    </div>
  );
};
