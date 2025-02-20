import { cn } from "@/lib/utils";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  color: string;
}

export default function WorkProcess() {
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Research",
      description: " We analyze trends, competitors & audience insights.",
      color: "bg-blue-50 text-blue-500",
    },
    {
      number: "02",
      title: "Idea",
      description: "We craft powerful marketing campaigns",
      color: "bg-emerald-50 text-emerald-500",
    },
    {
      number: "03",
      title: "Develop",
      description: "We run & optimize for the best results",
      color: "bg-teal-400 text-white",
    },
    {
      number: "04",
      title: "Launch",
      description: "We scale your brand for long-term success",
      color: "bg-pink-100 text-pink-500",
    },
  ];

  return (
    <section
      className="px-4 py-16  mb-16"
      style={{ backgroundImage: `url(${"/bgimage.jpg"})` }}
    >
      <div className="text-center  mb-16">
        <h3 className="text-4xl text-white font-bold mb-6">Our Work Process</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto text-white">
          Maximize your marketing potential while reducing operational costs.
          Our strategic approach ensures impactful digital experiences that
          drive engagement and growth.
        </p>
      </div>

      <div className="relative">
        {/* Connecting Lines */}
        <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-0.5">
          <div className="w-full h-full border-t-2 border-dashed border-muted" />
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold mb-6",
                    step.color
                  )}
                >
                  {step.number}
                </div>
                <h4 className="text-xl font-semibold mb-4 text-white">
                  {step.title}
                </h4>
                <p className="text-muted-foreground text-center text-white">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
