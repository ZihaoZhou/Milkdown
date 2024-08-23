import { Button } from "@/components/home/Button";
import { InfoCard } from "@/components/home/InfoCard";
import { Liquid } from "@/components/liquid";
import Loading from "@/components/loading";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";

const gettingStarted = "/docs/guide/getting-started";
const playground = "/playground";

const doc = `
# Like this one

> I'll see you on the dark side of the moon.  -- Roger Waters

Try it out by typing in here, or visiting the [online playground](/playground).
`;

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

const HomeEditor = dynamic(() => import("@/components/home-editor"), {
  ssr: false,
  loading: () => <Loading />,
});

const InfoCardData = [
  {
    emoji: "🔩",
    title: "Plugin Driven",
    desc: "Everything in Milkdown are plugins. Extend your editor with different types of plugins: syntax, theme, UI, etc.",
  },
  {
    emoji: "🤝",
    title: "Collaborative",
    desc: "With the support of Y.js, Milkdown can be used in real-time collaborative editing which can support multiple users editing on the same documentation.",
  },
  {
    emoji: "🤯",
    title: "Headless",
    desc: "Milkdown is headless and comes without any CSS. You can easily customize the editor to fit the style of your application.",
  },
  {
    emoji: "💡",
    title: "Reliable",
    desc: "Milkdown is built on top of some great libraries, such as ProseMirror, Y.js, and Remark, which means you can use their community and eco system to get help.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Milkdown</title>
      </Head>
      <div>
        <Liquid>
          <div className="min-w-64 relative z-10 flex h-full w-full flex-col items-center justify-center">
            <h1
              className={clsx(
                "text-center text-4xl font-bold text-nord-neutral dark:text-nord-neutral-dark sm:text-6xl xl:text-7xl",
                "liquid-content opacity-0 delay-300"
              )}
            >
              Milkdown
            </h1>
            <p
              className={clsx(
                "text-center text-nord-neutral dark:text-nord-neutral-dark",
                "text-base sm:text-2xl",
                "mt-6 mb-11 sm:mt-10 sm:mb-10",
                "w-64 sm:w-full",
                "liquid-content opacity-0 delay-500"
              )}
            >
              A plugin driven framework to build WYSIWYG Markdown editor.
            </p>
            <div
              className={clsx(
                "flex flex-col gap-4 sm:flex-row sm:gap-10",
                "liquid-content opacity-0 delay-700"
              )}
            >
              <Link href={gettingStarted}>
                <Button primary text="Get Started" />
              </Link>
              <Link href={playground}>
                <Button text="Playground" />
              </Link>
            </div>
          </div>
        </Liquid>
        <div className="mx-8 mb-10 md:mx-24 md:mb-24 lg:mx-40 xl:mx-80 2xl:mx-auto 2xl:max-w-4xl">
          <div className="mt-10 md:mt-24">
            <HomeEditor value={doc.trim()} />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2">
            {InfoCardData.map((data) => (
              <InfoCard
                key={data.title}
                emoji={data.emoji}
                title={data.title}
                desc={data.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
