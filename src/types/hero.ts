export interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
}

export interface HeroContentProps {
  todayRef: React.RefObject<HTMLSpanElement>;
}

export interface HeroImageProps {
  src: string;
  alt: string;
}