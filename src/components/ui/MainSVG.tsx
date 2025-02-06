import { cn } from '@/lib/utils';

export default function MainSVG({ width, height, className }: { width: number; height: number; className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      id='visual'
      viewBox='-300 -300 600 600'
      width={width}
      height={height}
      preserveAspectRatio='xMidYMid meet'
      className={cn('absolute', className)}
    >
      <path
        d='M215.8 -220.6C254.8 -176.8 244.4 -88.4 225.7 -18.7C206.9 50.9 179.8 101.8 140.8 140.3C101.8 178.8 50.9 204.9 8.9 196C-33.1 187.1 -66.3 143.3 -97.5 104.8C-128.6 66.3 -157.8 33.1 -176.6 -18.8C-195.4 -70.7 -203.8 -141.4 -172.6 -185.3C-141.4 -229.1 -70.7 -246 8.8 -254.9C88.4 -263.7 176.8 -264.4 215.8 -220.6'
        fill='#d1a537'
      />
    </svg>
  );
}
