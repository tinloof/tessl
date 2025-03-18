import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      Tessl Landscape
      <Link href="/landscape" className="underline">
        go to Landscape
      </Link>
    </div>
  );
}
