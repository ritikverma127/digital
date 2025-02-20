"use client";
import { lazy } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const VerticalAutoImageSlider = lazy(
  () => import("../../../components/ui/AutoImageslider")
);

export default function ContactPage() {
  // Sample image URLs - replace these with your actual image paths
  const sliderImages = [
    "/im-working.avif",
    "/contact3.jpg",
    "/contact1.jpg",
    "/contact2.jpg",
  ];

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-82px)] overflow-hidden">
      {/* Contact Form - Left Side */}
      <div className="w-full md:w-1/2 p-4 md:p-6 flex items-center justify-center overflow-y-auto">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-4xl font-bold">
              Contact Us
              <div className="h-1 w-20 md:w-36 bg-blue-400 mx-auto mt-1"></div>
            </h1>
            {/* <h2 className="text-lg md:text-2xl font-bold mb-3">
              Let&apos;s get in touch!
            </h2> */}
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <Label htmlFor="name" className="font-bold text-xl">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Your name"
                required
                name="name"
                className="mt-1 w-full h-10"
              />
            </div>
            <div>
              <Label htmlFor="email" className="font-bold text-xl">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@email.com"
                required
                name="email"
                className="mt-1 w-full h-10"
              />
            </div>
            <div>
              <Label htmlFor="message" className="font-bold text-xl">
                Message <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="Write your detailed message here..."
                required
                name="message"
                className="mt-1 w-full min-h-[70px] md:min-h-[90px]"
              />
            </div>
            <Button
              type="submit"
              className="w-full md:w-auto bg-blue-700 text-white hover:bg-blue-600"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* Vertical Image Slider - Right Side */}
      <div className="w-full md:w-1/2 h-64 hidden md:block   md:h-full">
        <VerticalAutoImageSlider images={sliderImages} interval={4000} />
      </div>
    </div>
  );
}
