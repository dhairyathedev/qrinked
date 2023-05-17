import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import HomePageLayout from "@/components/Layout/HomePage"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function IndexPage() {
  return (
    <HomePageLayout>
      <Head>
        <title>Next.js</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="mt-16 font-primary">
        <h1 className="mx-auto w-auto scale-100 text-center text-2xl font-bold duration-300 md:w-3/5 md:scale-125 md:text-3xl">
          Create your own <span className="text-primary">QR codes</span> and
          boost your ideas or business
        </h1>
        <Link href="/login" className="mt-8 flex items-center justify-center">
          <button className="blueShadow rounded-full bg-primary px-8 py-3 text-lg font-bold text-white transition-all hover:opacity-80 sm:text-xl">
            Start Now!
          </button>
        </Link>
        <Image
          src="/assets/images/header-img.svg"
          alt="QR Code For Anything"
          width={1200}
          height={1200}
          className="mt-16 w-full px-4 drop-shadow-md"
        />
      </section>

      <section className="mx-2 mb-10 mt-16">
        <h1 className="mx-auto w-auto scale-100 text-center text-2xl font-bold duration-300 md:w-3/5 md:scale-125 md:text-3xl">
          Things you need to know to get started
        </h1>
        <h4 className="mx-auto mt-4 w-full text-center text-sm font-semibold text-[#a4a4a4] sm:text-base md:w-3/5">
          This section introduces the basic ideas and the steps you need to
          follow to take advantage of QR technology.{" "}
        </h4>
        <div className="mt-8 flex flex-col items-center space-y-4 md:flex-row md:space-x-2">
          <Image
            src="/assets/images/qna-img.svg"
            alt="QR with stars"
            width={100}
            height={100}
            className="w-2/5"
          />
          <div className="flex w-full flex-col space-y-4 pt-4 md:w-3/5 md:pt-16">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What is a QR Code?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Elit
                  non aute cupidatat incididunt tempor sunt laboris. Lorem esse
                  eiusmod aute exercitation duis. In ipsum nulla sunt qui
                  aliquip consectetur non deserunt eiusmod amet commodo
                  exercitation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How to use a QR Code?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Elit
                  non aute cupidatat incididunt tempor sunt laboris. Lorem esse
                  eiusmod aute exercitation duis. In ipsum nulla sunt qui
                  aliquip consectetur non deserunt eiusmod amet commodo
                  exercitation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Benefits of a QR Code?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Elit
                  non aute cupidatat incididunt tempor sunt laboris. Lorem esse
                  eiusmod aute exercitation duis. In ipsum nulla sunt qui
                  aliquip consectetur non deserunt eiusmod amet commodo
                  exercitation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Where to use a QR Code?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Elit
                  non aute cupidatat incididunt tempor sunt laboris. Lorem esse
                  eiusmod aute exercitation duis. In ipsum nulla sunt qui
                  aliquip consectetur non deserunt eiusmod amet commodo
                  exercitation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-between border-t p-4">
        <div>
        <Image src="/assets/logo.svg" alt="QRInked" width={140} height={200} />
        <h3 className="mt-2 w-3/5 text-xs font-semibold sm:text-sm">Create your own QR codes and boost your ideas or business</h3>
        </div>
        <Link href="/contact" className="mt-8 flex items-center justify-center">
          <button className="hidden rounded-full bg-primary px-8 py-3 text-lg font-bold text-white transition-all hover:opacity-80 sm:text-xl md:block">
              Contact us
          </button>
        </Link>
      </section>
    </HomePageLayout>
  )
}
