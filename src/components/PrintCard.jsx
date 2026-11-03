const PrintCard = ({ src, width, height, alt }) => (
  <figure className="rounded-[20px] border border-[#dcdee7] bg-white p-3 shadow-[0_12px_32px_-12px_rgba(30,35,74,0.12)]">
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="block h-auto w-full rounded-[10px]"
    />
  </figure>
);

export default PrintCard;
