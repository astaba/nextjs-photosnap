import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

function GetAnInvite({ className }: { className?: string }) {
  return (
    <a href="#" className={`inline-flex capitalize ${className}`}>
      get an invite <ExternalLink strokeWidth={2} size={18} />
    </a>
  );
}

export default GetAnInvite;
