import { SiPerplexity } from "react-icons/si";

export default function Logo({ size = 25, className = "text-btnClr" }) {
  return <div>
    <SiPerplexity className={className} size={size} />
  </div>;
}
