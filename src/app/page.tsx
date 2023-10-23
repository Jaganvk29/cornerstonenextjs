import Image from "next/image";
import dynamic from "next/dynamic";

const Viewer = dynamic(() => import("@/components/Viewer"), { ssr: false });
export default function Home() {
  return (
    <div>
      <Viewer />
    </div>
  );
}
