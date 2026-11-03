import styles from "../style";

const Overline = ({ children, tone = "wine", className = "" }) => {
  const color = { wine: "text-wine", lilac: "text-lilac", navy: "text-navy-700" }[tone];

  return <p className={`${styles.overline} ${color} ${className}`}>{children}</p>;
};

export default Overline;
