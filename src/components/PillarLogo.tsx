type Props = {
  className?: string;
};

export function PillarLogo({ className }: Props) {
  return (
    <img
      src="/PillarLogo.png"
      alt="Pillar"
      className={className}
      draggable={false}
    />
  );
}
