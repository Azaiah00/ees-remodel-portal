"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

/** Downloadable asset: URL and label for the client. */
interface DownloadAsset {
  url: string;
  label: string;
}

interface DeliverableItem {
  id: number;
  title: string;
  subtitle: string;
  type: string;
  image: string;
  colSpan?: string;
  video?: string;
  downloadAssets: DownloadAsset[];
}

// EES-specific deliverables: flyers, ad creatives, Reels thumbnails, before/after imagery
const deliverables: DeliverableItem[] = [
  {
    id: 1,
    title: "Dated to Sophisticated",
    subtitle: "Bathroom Before/After Flyer",
    type: "Flyer",
    image: "/assets/flyer-bathroom-dated-to-sophisticated-1.png",
    colSpan: "md:col-span-2 md:row-span-2",
    downloadAssets: [
      { url: "/assets/flyer-bathroom-dated-to-sophisticated-1.png", label: "Bathroom Flyer (PNG)" },
    ],
  },
  {
    id: 2,
    title: "Reels Thumbnail",
    subtitle: "Bathroom Before/After",
    type: "Social",
    image: "https://placehold.co/400x600/1e3a5f/ffffff?text=Reel",
    downloadAssets: [
      { url: "https://placehold.co/400x600/1e3a5f/ffffff?text=Reel", label: "Reels Thumbnail" },
    ],
  },
  {
    id: 3,
    title: "Facebook Ad Creative",
    subtitle: "Get a Free Quote CTA",
    type: "Advertising",
    image: "https://placehold.co/600x400/c41e3a/ffffff?text=FB+Ad",
    downloadAssets: [
      { url: "https://placehold.co/600x400/c41e3a/ffffff?text=FB+Ad", label: "Facebook Ad" },
    ],
  },
  {
    id: 4,
    title: "Sample Video",
    subtitle: "Example from another client",
    type: "Video",
    image: "/flyer-example.png",
    colSpan: "md:row-span-2",
    video: "/0308-bng-remodel-sample-vid.mp4",
    downloadAssets: [
      { url: "/0308-bng-remodel-sample-vid.mp4", label: "Sample Video (MP4)" },
      { url: "/flyer-example.png", label: "Poster image" },
    ],
  },
  {
    id: 5,
    title: "Dated to Sophisticated",
    subtitle: "Bathroom Remodel Ad Creative",
    type: "Flyer",
    image: "/assets/flyer-bathroom-dated-to-sophisticated-2.png",
    colSpan: "md:row-span-2",
    downloadAssets: [
      { url: "/assets/flyer-bathroom-dated-to-sophisticated-2.png", label: "Bathroom Ad Creative (PNG)" },
    ],
  },
  {
    id: 6,
    title: "Brand Logo",
    subtitle: "EES Remodeling",
    type: "Branding",
    image: "/ees-logo.png",
    downloadAssets: [{ url: "/ees-logo.png", label: "EES Logo" }],
  },
];

export default function Deliverables() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [openDownloadId, setOpenDownloadId] = useState<number | null>(null);
  const [selectedImageItemId, setSelectedImageItemId] = useState<number | null>(null);

  return (
    <section
      id="deliverables"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-16 border-b border-zinc-800 pb-4 sm:pb-8">
        <div>
          <span className="text-[var(--color-bng-red)] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
            What We Deliver
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white uppercase tracking-tight">
            Visual Assets
          </h2>
        </div>
        <div className="text-right mt-8 md:mt-0">
          <p className="text-zinc-400 text-sm uppercase tracking-widest font-mono">
            Status: <span className="text-green-500">Ready for Deployment</span>
          </p>
          <p className="text-zinc-600 text-xs uppercase tracking-widest font-mono mt-1">
            Assets: {deliverables.length}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-1 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[250px]">
        {deliverables.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className={cn(
              "relative group cursor-pointer overflow-hidden bg-black border border-zinc-900",
              item.colSpan ?? "",
              item.video && "flex flex-col items-center justify-center p-2 sm:p-3"
            )}
            onClick={() => {
              setOpenDownloadId(null);
              if (item.video) {
                setSelectedVideo(item.video ?? null);
                return;
              }
              setSelectedImageItemId(item.id);
              setSelectedImage(item.image);
            }}
          >
            {item.video ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full max-w-[180px] sm:max-w-[220px] aspect-[9/16] overflow-hidden bg-black relative">
                  {item.image.startsWith("https://") ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </div>
            ) : item.image.startsWith("https://") ? (
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />
            ) : (
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 pointer-events-none" />

            <div className="absolute bottom-0 left-0 w-full p-3 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[var(--color-bng-red)] text-[10px] font-bold uppercase tracking-[0.2em] mb-1 sm:mb-2 block">
                {item.type}
              </span>
              <h3 className="text-white font-bold text-base sm:text-lg md:text-xl uppercase tracking-wide mb-0.5 sm:mb-1">
                {item.title}
              </h3>
              <p className="text-zinc-500 text-[10px] sm:text-xs uppercase tracking-widest font-mono group-hover:text-zinc-300 transition-colors">
                {item.subtitle}
              </p>
            </div>
            <div
              className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {item.downloadAssets.length === 1 ? (
                <a
                  href={item.downloadAssets[0].url}
                  download={item.downloadAssets[0].url.split("/").pop() || "download"}
                  className="bg-[var(--color-bng-red)] hover:opacity-90 p-2.5 sm:p-2 rounded-none min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center transition-colors"
                  title="Download"
                >
                  <Download className="w-4 h-4 text-white" />
                </a>
              ) : (
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenDownloadId(openDownloadId === item.id ? null : item.id)}
                    className="bg-[var(--color-bng-red)] hover:opacity-90 p-2.5 sm:p-2 rounded-none min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
                    title="Download assets"
                  >
                    <Download className="w-4 h-4 text-white" />
                  </button>
                  {openDownloadId === item.id && (
                    <div className="absolute top-full right-0 mt-1 py-2 bg-zinc-900 border border-zinc-800 min-w-[160px] shadow-xl z-10">
                      {item.downloadAssets.map((asset) => (
                        <a
                          key={asset.label}
                          href={asset.url}
                          download
                          className="block px-4 py-2 text-sm text-white hover:bg-zinc-800"
                        >
                          {asset.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={() => {
              setSelectedImage(null);
              setSelectedImageItemId(null);
            }}
          >
            <button
              className="absolute top-4 right-4 p-2 text-white hover:text-zinc-400"
              onClick={() => {
                setSelectedImage(null);
                setSelectedImageItemId(null);
              }}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
              {selectedImage.startsWith("https://") ? (
                <img
                  src={selectedImage}
                  alt="Full size"
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              ) : (
                <Image
                  src={selectedImage}
                  alt="Full size"
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              )}
              {selectedImageItemId && (
                <div className="mt-4 flex gap-2 flex-wrap justify-center">
                  {deliverables
                    .find((d) => d.id === selectedImageItemId)
                    ?.downloadAssets.map((asset) => (
                      <a
                        key={asset.label}
                        href={asset.url}
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-bng-red)] text-white text-sm font-bold uppercase tracking-widest hover:opacity-90"
                      >
                        <Download className="w-4 h-4" />
                        {asset.label}
                      </a>
                    ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Lightbox */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 text-white hover:text-zinc-400"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="max-w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
