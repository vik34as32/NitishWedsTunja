import fs from "node:fs";
import path from "node:path";
import { InvitationStage } from "@/components/InvitationStage";

export default function Home() {
  const html = fs.readFileSync(
    path.join(process.cwd(), "src/invitation/markup.html"),
    "utf8",
  );

  return <InvitationStage html={html} />;
}
