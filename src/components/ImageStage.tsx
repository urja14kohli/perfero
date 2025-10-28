import Image from "next/image";
import clsx from "clsx";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** set true ONLY for legacy JPGs with baked-in backgrounds */
  maskEdges?: boolean;
};

export default function ImageStage({ src, alt, className, maskEdges = true }: Props) {
  return (
    <figure
      className={clsx(
        // unified stage
        "relative rounded-xl bg-[#F6F1E6] overflow-hidden",
        // aspect ratios
        "aspect-[4/5] lg:aspect-square",
        // inner lighting
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(90%_70%_at_50%_35%,rgba(255,255,255,0.65),transparent)]",
        className
      )}
      aria-label={alt}
    >
      {/* subtle platform shadow */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[70%] h-6 rounded-full bg-black/10 blur-md opacity-30" />

      {/* image */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width:1024px) 420px, 60vw"
        className={clsx(
          "object-contain p-4 md:p-6",
          // Remove mask to show rounded corners clearly
          // maskEdges &&
          //   "[mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"
        )}
        style={{
          borderRadius: 'inherit'
        }}
        priority={false}
      />
    </figure>
  );
}
