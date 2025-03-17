import { Button } from "@/components/shared/button";
import Tags from "@/components/shared/tags";

export default function Home() {
  return (
    <div className=" h-screen w-screen flex items-center justify-center gap-4">
      Tessl Landscape
      <Button variant="secondary" padding="small">
        Click me
      </Button>
      <Button variant="primary" padding="medium">
        Subscribe
      </Button>
      <Tags name="Name" color="green" active />
      <Tags name="Name" color="orange" />
    </div>
  );
}
