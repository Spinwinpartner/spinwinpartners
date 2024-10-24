import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 overflow-hidden">
        <div className="h-screen w-screen">
          <iframe
            frameBorder="0"
            height="100%"
            src="https://toptdspup.com/games/xzdJhmCN/"
            title="Embedded content"
            width="100%"
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
