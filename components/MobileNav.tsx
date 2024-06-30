import Image from "next/image";

import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";

export default function MobileNav({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Image
            width={22}
            height={22}
            src={"/assets/shared/mobile/menu.svg"}
            alt=""
            className="cursor-pointer py-2"
          />
        </SheetTrigger>
        <SheetContent>
          <div className="">{children}</div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
