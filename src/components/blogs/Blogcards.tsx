"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Loader from "../ui/loader";
import { useRef, useState } from "react";
import { products } from "../../components/blogs/BlogData";
interface BlogPost {
  title: string;
  image: string;
  description: string;
}

export default function BlogGrid() {
  const [page, setPage] = useState(products);
  const loaderRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {page?.map((post: BlogPost, index: number) => (
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
    </div>
  );
}
