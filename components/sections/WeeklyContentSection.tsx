"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, Film, Layout, CheckCircle2, X, Play, ChevronDown, Clock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/** Content types: video, reels, video_ad map to video cards; static, instagram_post, facebook_post map to static cards. */
export interface ContentPost {
  id: string;
  type: "video" | "static" | "reels" | "video_ad" | "instagram_post" | "facebook_post";
  aspectRatio: "9/16" | "3/4" | "16/9";
  title: string;
  thumbnail: string;
  assetUrl?: string;
  thumbnailAssetUrl?: string;
  isNew?: boolean;
  caption?: string;
  hashtags?: string;
  platform?: string;
  instructions?: {
    platform: string;
    caption: string;
    hashtags: string;
    postingTime?: string;
  }[];
}

export interface WeekData {
  weekId: string;
  dates: string;
  status: string;
  content: ContentPost[];
}

interface WeeklyContentSectionProps {
  weekData: WeekData;
  /** When omitted, the "Change Week" button is hidden (e.g. when only one week exists). */
  onChangeWeek?: () => void;
}

export default function WeeklyContentSection({ weekData, onChangeWeek }: WeeklyContentSectionProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewItem, setPreviewItem] = useState<ContentPost | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Video types: video, reels, video_ad
  const videos = weekData.content.filter((item) =>
    ["video", "reels", "video_ad"].includes(item.type)
  );
  // Static types: static, instagram_post, facebook_post
  const statics = weekData.content.filter((item) =>
    ["static", "instagram_post", "facebook_post"].includes(item.type)
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24 bg-black min-h-screen overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 mb-10 sm:mb-16 md:mb-20 border-b border-zinc-800 pb-6 sm:pb-8">
        <div className="w-full">
          <span className="text-[var(--color-bng-red)] font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-3 sm:mb-4 block">
            Weekly Distribution
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-tight leading-tight">
              Weekly Content Hub
            </h2>
            {onChangeWeek != null && (
              <button
                onClick={onChangeWeek}
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 hover:border-[var(--color-bng-red)] text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm sm:mt-2"
              >
                Change Week <ChevronDown className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
        <div className="w-full md:w-auto md:text-right flex flex-col sm:flex-row md:flex-col gap-2 sm:gap-4 md:gap-1">
          <p className="text-zinc-400 text-xs sm:text-sm uppercase tracking-widest font-mono">
            Selected: <span className="text-white">{weekData.dates}</span>
          </p>
          <p className="text-zinc-600 text-[10px] sm:text-xs uppercase tracking-widest font-mono flex items-center gap-2">
            Status:{" "}
            {weekData.status === "Ready" ? (
              <span className="text-emerald-500 inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" /> Ready
              </span>
            ) : (
              <span className="text-amber-500 inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 flex-shrink-0" /> {weekData.status}
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Reels / Video Ads (9:16) */}
      {videos.length > 0 && (
        <div className="mb-14 sm:mb-20">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6 sm:mb-10">
            <Film className="text-[var(--color-bng-red)] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
              Reels & Video Ads (9:16)
            </h3>
            <div className="h-px bg-zinc-800 flex-1 min-w-[60px]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {videos.map((item) => (
              <ContentCard
                key={item.id}
                item={item}
                onCopy={copyToClipboard}
                copiedId={copiedId}
                onPreview={setPreviewItem}
              />
            ))}
          </div>
        </div>
      )}

      {/* Instagram / Facebook Posts (3:4) */}
      {statics.length > 0 && (
        <div className="mb-14 sm:mb-20">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6 sm:mb-10">
            <Layout className="text-[var(--color-bng-red)] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
              Instagram & Facebook Posts
            </h3>
            <div className="h-px bg-zinc-800 flex-1 min-w-[60px]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {statics.map((item) => (
              <ContentCard
                key={item.id}
                item={item}
                onCopy={copyToClipboard}
                copiedId={copiedId}
                onPreview={setPreviewItem}
              />
            ))}
          </div>
        </div>
      )}

      {/* Fullscreen preview modal */}
      <AnimatePresence>
        {previewItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-3 sm:p-4"
            onClick={() => setPreviewItem(null)}
          >
            <button
              type="button"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-zinc-400 hover:text-white transition-colors rounded-sm"
              onClick={() => setPreviewItem(null)}
              aria-label="Close preview"
            >
              <X className="w-7 h-7 sm:w-8 sm:h-8" />
            </button>
            <div
              className={cn(
                "relative bg-black border border-zinc-800 shadow-2xl w-full",
                previewItem.aspectRatio === "9/16"
                  ? "aspect-[9/16] max-h-[85vh] sm:max-h-[90vh]"
                  : "aspect-[3/4] max-h-[85vh] sm:max-h-[90vh]"
              )}
              style={{
                maxWidth:
                  previewItem.aspectRatio === "9/16"
                    ? "min(100%, calc(90vh * 9 / 16))"
                    : "min(100%, calc(90vh * 3 / 4))",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {["video", "reels", "video_ad"].includes(previewItem.type) &&
              previewItem.assetUrl ? (
                <video
                  src={previewItem.assetUrl}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                  muted={false}
                />
              ) : (() => {
                const previewSrc = (previewItem.assetUrl || previewItem.thumbnail) ?? "";
                return previewSrc.startsWith("https://") ? (
                  <img
                    src={previewSrc}
                    alt={previewItem.title}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={previewSrc}
                    alt={previewItem.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                );
              })()}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/95 to-transparent border-t border-zinc-800">
                <p className="text-white text-[11px] sm:text-xs font-medium mb-1 line-clamp-2">
                  {previewItem.instructions?.[0]?.caption || previewItem.caption}
                </p>
                <p className="text-[var(--color-bng-red)]/90 font-mono text-[9px] sm:text-[10px] mb-3 line-clamp-1 break-all">
                  {previewItem.instructions?.[0]?.hashtags || previewItem.hashtags}
                </p>
                <div className="flex flex-wrap gap-2">
                  {previewItem.assetUrl && (
                    <a
                      href={previewItem.assetUrl}
                      download={previewItem.assetUrl.split("/").pop() || "download"}
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-3 sm:py-2 bg-[var(--color-bng-red)] hover:opacity-90 text-white text-xs font-bold uppercase tracking-widest transition-colors rounded-sm"
                    >
                      <Download className="w-4 h-4 flex-shrink-0" />
                      Download
                    </a>
                  )}
                  {previewItem.thumbnailAssetUrl && (
                    <a
                      href={previewItem.thumbnailAssetUrl}
                      download={previewItem.thumbnailAssetUrl.split("/").pop() || "thumbnail"}
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-3 sm:py-2 bg-zinc-700 hover:bg-zinc-600 text-white text-xs font-bold uppercase tracking-widest transition-colors rounded-sm border border-zinc-600"
                    >
                      <Download className="w-4 h-4 flex-shrink-0" />
                      Download Thumbnail
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ContentCard({
  item,
  onCopy,
  copiedId,
  onPreview,
}: {
  item: ContentPost;
  onCopy: (text: string, id: string) => void;
  copiedId: string | null;
  onPreview: (item: ContentPost) => void;
}) {
  const caption =
    item.instructions?.[0]?.caption || item.caption || "";
  const hashtags =
    item.instructions?.[0]?.hashtags || item.hashtags || "";
  const platform =
    item.platform || item.instructions?.[0]?.platform || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      className="flex flex-col bg-zinc-900/30 border border-zinc-800 group hover:border-[var(--color-bng-red)]/50 transition-all duration-300 rounded-sm overflow-hidden relative"
    >
      {item.isNew && (
        <div className="absolute top-3 right-3 z-20 bg-emerald-500 text-black text-sm font-black uppercase tracking-tighter px-3 py-1.5 rounded-sm">
          New
        </div>
      )}
      <button
        type="button"
        onClick={() => onPreview(item)}
        className={cn(
          "relative overflow-hidden bg-black w-full text-left cursor-pointer touch-manipulation",
          item.aspectRatio === "9/16" ? "aspect-[9/16]" : "aspect-[3/4]"
        )}
      >
        {item.thumbnail ? (
          item.thumbnail.startsWith("https://") ? (
            <img
              src={item.thumbnail}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          ) : (
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          )
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-zinc-500 text-xs font-mono uppercase tracking-widest px-4 text-center">
            Thumbnail coming soon
          </div>
        )}
        {platform && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2 py-1.5 bg-black/70 backdrop-blur-md border border-zinc-700 text-[10px] font-bold text-white uppercase tracking-widest rounded-sm">
              {platform}
            </span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center gap-2 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
          <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--color-bng-red)] text-white text-xs font-bold uppercase tracking-widest rounded-sm">
            <Play className="w-4 h-4" />
            Tap to view
          </span>
          {item.assetUrl && (
            <a
              href={item.assetUrl}
              download={item.assetUrl.split("/").pop() || "download"}
              className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </a>
          )}
        </div>
      </button>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h4 className="text-white font-bold uppercase tracking-wide text-base sm:text-sm mb-3 border-b border-zinc-800 pb-2 line-clamp-2">
          {item.title}
        </h4>
        {(caption || hashtags) && (
          <div className="space-y-2 flex-1">
            {caption && (
              <div className="relative group/copy">
                <p className="text-zinc-400 text-[11px] sm:text-xs leading-relaxed line-clamp-3">
                  {caption}
                </p>
                <button
                  onClick={() => onCopy(caption, `${item.id}-caption`)}
                  className="mt-2 inline-flex items-center gap-2 min-h-[36px] px-3 py-1.5 bg-zinc-800 hover:bg-[var(--color-bng-red)] text-white text-[10px] font-bold uppercase tracking-widest transition-colors rounded-sm"
                >
                  {copiedId === `${item.id}-caption` ? "Copied!" : "Copy Caption"}
                </button>
              </div>
            )}
            {hashtags && (
              <div className="relative">
                <p className="text-[var(--color-bng-red)]/90 font-mono text-[9px] sm:text-[10px] break-all line-clamp-2">
                  {hashtags}
                </p>
                <button
                  onClick={() => onCopy(hashtags, `${item.id}-hashtags`)}
                  className="mt-1 inline-flex items-center gap-2 min-h-[36px] px-3 py-1.5 bg-zinc-800 hover:bg-[var(--color-bng-red)] text-white text-[10px] font-bold uppercase tracking-widest transition-colors rounded-sm"
                >
                  {copiedId === `${item.id}-hashtags` ? "Copied!" : "Copy Hashtags"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
