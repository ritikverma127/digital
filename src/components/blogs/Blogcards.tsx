"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../ui/loader";
import { useEffect, useRef, useState } from "react";

interface BlogPost {
  title: string;
  image: string;
  description: string;
}

async function fetchProducts() {
  const res = await axios.get(
    "https://dummy-api-f49w.onrender.com/api/products"
  );
  const data = await res.data;
  return data;
}

export default function BlogGrid() {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [visibleUsers, setVisibleUsers] = useState<BlogPost[]>([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setVisibleUsers(data.slice(0, 12));
    }
  }, [data]);

  useEffect(() => {
    if (!data) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleUsers.length < data.length) {
          loadMoreUsers();
        }
      },
      { threshold: 0.5 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.disconnect();
      }
    };
  }, [visibleUsers, data]);

  const loadMoreUsers = () => {
    const nextPage = page + 1;
    const newUsers = data.slice(0, nextPage * 12);
    setVisibleUsers(newUsers);
    setPage(nextPage);
  };

  if (isLoading) return <Loader />;
  if (isError) {
    console.error("Error fetching data:", error);
    return <p className="text-center text-red-500">Error fetching data</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleUsers?.map((post: BlogPost, index: number) => (
          <Card
            key={index}
            className="group overflow-hidden transition-shadow hover:shadow-lg"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <CardContent className="p-4">
              <h2 className="font-semibold text-lg line-clamp-2 group-hover:text-primary">
                {post.title}
              </h2>
              <p className="text-muted-foreground line-clamp-2">
                {post.description.slice(0, 100)}...
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      {visibleUsers.length < (data?.length || 0) && (
        <div ref={loaderRef} className="w-full flex justify-center py-8">
          <Loader />
        </div>
      )}
    </div>
  );
}
