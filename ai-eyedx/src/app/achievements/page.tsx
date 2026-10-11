import Image from "next/image";

const achievementImages = [
  {
    id: "research-poster",
    src: "/team/achievment1.jpeg",
    title: "AI EyeDx Research Poster",
    alt: "AI EyeDx research poster displayed at the ICDMIS 2026 conference.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: "conference-presentation",
    src: "/team/achievment3.png",
    title: "Conference Presentation",
    alt: "AI EyeDx researcher presenting the project poster at a conference.",
    className: "",
  },
  {
    id: "team-recognition",
    src: "/team/achievment4.png",
    title: "Conference Team Photo",
    alt: "AI EyeDx team members together at the ICDMIS 2026 conference.",
    className: "",
  },
  {
    id: "conference-poster",
    src: "/team/achievment5.jpeg",
    title: "Poster Presentation",
    alt: "AI EyeDx research poster presented at the ICDMIS 2026 conference.",
    className: "",
  },
  {
    id: "certificate-oshan",
    src: "/team/certificate1.jpeg",
    title: "Oshan Wijekoon · Certificate of Participation",
    alt: "ICDMIS 2026 certificate of participation for Oshan Wijekoon.",
    className: "",
  },
  {
    id: "certificate-binuri",
    src: "/team/certificate2.jpeg",
    title: "Binuri Perera · Certificate of Participation",
    alt: "ICDMIS 2026 certificate of participation for Binuri Perera.",
    className: "",
  },
];

export default function AchievementsPage() {
  return (
    <main className="bg-slate-50 text-slate-800">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(99,102,241,0.3),transparent_35%),radial-gradient(circle_at_15%_80%,rgba(14,165,233,0.2),transparent_30%)]" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-blue-100 backdrop-blur">
            Research Achievements
          </p>
          <h1 className="mt-6 text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
            Celebrating the work behind AI EyeDx
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-blue-100/90 sm:text-lg">
            A collection of research presentations and conference participation marking the team&apos;s progress in explainable, multi-disease eye assessment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">ICDMIS 2026</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Research, shared with the community
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              The team presented its technical poster at the 3rd International Conference on Data Mining and Information Security (ICDMIS 2026), held in Sri Lanka on October 7–8, 2026. The conference provided an opportunity to share the AI EyeDx research on explainable, multi-disease assessment of diabetes-related eye disorders with the research community.
            </p>
          </div>
          <div className="grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 md:grid-cols-4">
            {achievementImages.map((image) => (
              <figure
                key={image.id}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent px-3 pb-3 pt-10 text-xs font-semibold leading-snug text-white sm:px-4 sm:pb-4 sm:text-sm">
                  {image.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
