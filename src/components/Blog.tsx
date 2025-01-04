// Home // BlogPage
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
interface IBlog {
  title: string;
  description: string;
  poster: any;
}

export default async function BlogPage() {
  const responce: IBlog[] = await client.fetch('*[_type == "blog"]');
  console.log(responce);
  return (
    <div className="flex flex-col items-center justify-center bg-[#000000]">
      <h1 className="font-bold text-[38px] lg:text-[48px] text-yellow-400 mt-10 font-serif">
        Festivals of Pakistan
      </h1>
      <p className="text-center font-medium text-[18px] sm:text-[18px] text-[white] lg:text-[22px] hover:underline underline-offset-8">
        Each festival in Pakistan tells a unique story.
      </p>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 items-center justify-center p-4 h-auto"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 items-center justify-items-center p-4 h-auto max-w-6xl">
        {responce.map((data) => (
          <Card key={data.title} className="shadow-md bg-gray-400 flex flex-col">
            {data.poster && (
              <Image
                src={urlFor(data.poster).url()}
                alt={data.title}
                height={200}
                width={300}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="flex-1 px-3 mt-2 space-y-3">
              <h2 className="font-semibold text-[22px] text-sky-700">
                {data.title}
              </h2>
              <p className="text-[16px]">{data.description}</p>
              <Button className="w-full mb-0 bg-sky-500 hover:bg-sky-400 text-[16px]">
                Read More
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-4 mb-5">
        <p className="mt-20 text-yellow-400 text-[24px] text-center w-full lg:max-w-3xl">
          In Pakistan, festivals like melas and urs bring people together to
          celebrate our traditions. They show our country's religious and
          cultural unity.
        </p>
      </div>
    </div>
  );
}
