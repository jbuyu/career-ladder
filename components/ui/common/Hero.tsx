import Image from "next/image";
import { Button } from "../button";
import { Timeline, TimelineItem } from "../timeline";
import { Check } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col space-y-20 p-20">
      <div className="flex flex-col space-y-7  justify-center items-center ">
        <div className="flex flex-col space-y-2 items-center text-5xl font-extrabold ">
          <div>Career inspiration, </div>
          <div className="flex space-x-4">
            <div>curated for you</div>
            <Image width={40} height={40} src="/bag.svg" alt="career-bag" />
          </div>
        </div>
        <div>Learn on the frontlines of search careers</div>
        <div className="flex space-x-4 items-center text-sm font-semibold">
          <Button className="bg-green-800 rounded-md text-sm font-semibold ">
            Get started
          </Button>
          <div>Learn more</div>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <Timeline>
          <TimelineItem
            date="2024-01-01"
            title="Feature Released"
            description="New timeline component is now available"
            icon={<Check />}
            status="completed"
          />
          <TimelineItem
            date="2024-01-01"
            title="Feature Released"
            description="New timeline component is now available"
            icon={<Check />}
            status="completed"
          />
          <TimelineItem
            date="2024-01-01"
            title="Feature Released"
            description="New timeline component is now available"
            icon={<Check />}
            status="completed"
          />
        </Timeline>
      </div>
    </div>
  );
}
