type Props = {
  title: string;
};

export default function TechBadge({
  title,
}: Props) {
  return (
    <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl">
      {title}
    </div>
  );
}