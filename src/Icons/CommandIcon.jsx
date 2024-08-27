import { MdKeyboardCommandKey } from "react-icons/md";

export default function CommandIcon({ size = 18 }) {
  return <div>
    <MdKeyboardCommandKey className="border border-gray-700 rounded-sm text-gray-500" size={size} />
  </div>;
}
