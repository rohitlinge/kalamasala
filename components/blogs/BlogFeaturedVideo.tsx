type Props = {
  src: string;
  title: string;
  width: number;
  height: number;
};

/** Pinterest (or similar) embed — no autoplay, muted by not requesting media autoplay. */
export default function BlogFeaturedVideo({ src, title, width, height }: Props) {
  const mutedSrc = src.includes("?") ? `${src}&autoplay=false` : `${src}?autoplay=false`;

  return (
    <div className="mx-auto w-full max-w-[600px] overflow-hidden rounded-sm border border-[#d5d9d9] bg-black">
      <div className="relative w-full" style={{ paddingBottom: `${(height / width) * 100}%` }}>
        <iframe
          src={mutedSrc}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          width={width}
          height={height}
          loading="lazy"
          scrolling="no"
          allow=""
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <p className="bg-[#f7f8f8] px-3 py-2 text-center text-[12px] text-[#565959]">
        Video is muted and does not autoplay — tap play when you want to watch.
      </p>
    </div>
  );
}
