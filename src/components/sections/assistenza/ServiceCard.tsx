import { ClippedBox } from '@/components/ui/ClippedBox'

interface ServiceCardProps {
  title: string
  description: string
  size?: 'full' | 'half'
}

export function ServiceCard({ title, description, size = 'full' }: ServiceCardProps) {
  const sizeClasses = size === 'full' 
    ? 'w-full' 
    : 'w-full md:w-1/2'
  
  return (
    <div className={`group relative ${sizeClasses}`}>
      <ClippedBox
        variant="serviziCardCut"
        className="bg-[#003157] p-6 transition-transform duration-300 hover:scale-[1.02] rounded-[20px]"
      >
        <div className="relative z-10">
          <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-white/90 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </ClippedBox>
    </div>
  )
}
