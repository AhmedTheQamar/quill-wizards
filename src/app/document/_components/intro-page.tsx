import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

export default function IntroPage() {
  return (
    <div className="min-h-screen bg-background flex flex-row justify-center p-4">
      <div className="container mx-auto grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <header>
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl xl:text-6xl">
              Unlock your Writing Potential
            </h1>
          </header>
          <main className="max-w-2xl mx-auto lg:mx-0">
            <p className="text-xl text-muted-foreground">
              Discover how our cutting-edge products and services can transform
              your writing with the power of AI.
            </p>
            <SignInButton>
              <Button className="mt-8" size="lg">
                Get Started
              </Button>
            </SignInButton>
          </main>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/hero.gif"
            alt="Hero image"
            width={600}
            height={400}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
