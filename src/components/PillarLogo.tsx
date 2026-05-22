type Props = {
  className?: string;
};

export function PillarLogo({ className }: Props) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}PillarLogo.png`}
      alt="Pillar"
      className={className}
      draggable={false}
    />
  );
}
