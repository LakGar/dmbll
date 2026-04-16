import {
  ArrowLeft,
  ChartArea,
  ChartAreaIcon,
  Dumbbell,
  Plus,
  Timer,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

const AuthLeft = () => {
  return (
    <div className="flex-1 h-full bg-black rounded-3xl relative p-4 hidden lg:block  overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between  pr-2 ">
        <Image src={"/logo-light.png"} alt="logo" width={60} height={60} />
        <Link href={"/"} className="group flex items-center gap-2 text-white">
          <ArrowLeft
            size={12}
            className="transition-colors duration-300 group-hover:text-white/70"
          />
          <p className="transition-colors duration-300 group-hover:text-white/70 text-xs">
            Back to the website
          </p>
        </Link>
      </div>

      {/* Floater */}
      <div className="relative w-full h-full top-0 left-0 overflow-hidden">
        <Image
          alt="bg-img"
          src={
            "https://images.pexels.com/photos/4709449/pexels-photo-4709449.jpeg"
          }
          fill
        />
        <div className=" absolute top-24 left-35 bg-white rounded-2xl flex flex-col gap-2 p-2 w-[300px]">
          <div className="w-full rounded-2xl overflow-hidden">
            <Image
              src={
                "https://images.pexels.com/photos/33048831/pexels-photo-33048831.jpeg"
              }
              alt=" "
              width={290}
              height={380}
            />
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-extrabold tracking-tighter">
              SOPHIE WORKS OUT
            </h1>
            <div className="flex items-center justify-between py-2">
              <div className="text-black/40 flex items-center gap-1">
                <Dumbbell size={10} />
                <p className="font-light text-xs">16 Workouts</p>
              </div>
              <div className="text-black/40 flex items-center gap-1">
                <Timer size={10} />
                <p className="font-light text-xs">3 Days/w</p>
              </div>
              <div className="text-black/40 flex items-center gap-1">
                <ChartArea size={10} />
                <p className="font-light text-xs">40 Comments</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-baseline">
                <h1 className="text-xl md:text-3xl font-extrabold tracking-tighter">
                  25
                </h1>
                <h1 className="text-xl text-black/40 md:text-3xl font-extralight tracking-tighter">
                  /
                </h1>
                <p className="text-black/40 text-sm">50 People</p>
              </div>
              <Button>Enroll Now</Button>
            </div>
          </div>
        </div>
        <div className=" absolute top-70 right-20 bg-white rounded-2xl flex flex-col gap-2 p-2 w-[300px] border border-black/5">
          <div className="w-full rounded-2xl overflow-hidden">
            <Image
              src={
                "https://images.pexels.com/photos/29205095/pexels-photo-29205095.jpeg"
              }
              alt=" "
              width={290}
              height={380}
            />
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-extrabold tracking-tighter">
              30 MIN ABS
            </h1>
            <div className="flex items-center justify-between py-2">
              <div className="text-black/40 flex items-center gap-1">
                <Dumbbell size={10} />
                <p className="font-light text-xs">30 Workouts</p>
              </div>
              <div className="text-black/40 flex items-center gap-1">
                <Timer size={10} />
                <p className="font-light text-xs">5 Days/w</p>
              </div>
              <div className="text-black/40 flex items-center gap-1">
                <ChartAreaIcon size={10} />
                <p className="font-light text-xs">400 Comments</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-baseline">
                <h1 className="text-xl md:text-3xl font-extrabold tracking-tighter">
                  103
                </h1>
                <h1 className="text-xl text-black/40 md:text-3xl font-extralight tracking-tighter">
                  /
                </h1>
                <p className="text-black/40 text-sm">150 People</p>
              </div>
              <Button>Enroll Now</Button>
            </div>
          </div>
        </div>
        <div className=" absolute top-10 right-10 bg-white rounded-2xl flex flex-col gap-2 p-2 w-[300px] border border-black/5">
          <div>
            <div className="flex flex-col">
              <h1 className=" p-0 text-xl font-bold tracking-tighter">
                PROTEIN
              </h1>
              <p className="text-xs">July 16</p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <h1 className=" p-0 text-3xl font-extrabold tracking-tighter">
                128g
              </h1>
              <div className="bg-black flex items-center px-4 py-2 rounded-2xl text-green-500">
                <Plus size={10} />
                <p className="font-light text-xs">68</p>
              </div>
            </div>
            <Progress value={80} className="w-full mb-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLeft;
