import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  image,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  image?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2]  border border-transparent justify-between flex flex-col space-y-4 overflow-hidden relative",
        className
      )}
    >
      {header}
      <div 
        className="absolute inset-0 w-full h-full bg-cover  bg-no-repeat  group-hover/bento:opacity-25 transition-opacity duration-200"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-10">
        <div className="font-sans font-bold  text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal  text-xs text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

