import React from 'react'
import Studiolayout from '@/modules/studio/ui/layouts/studio-layout';
interface LayoutProps{
    children: React.ReactNode;
}

const layout = ({children}: LayoutProps) => {
  return (
    <Studiolayout>
      {children}
    </Studiolayout>
  )
}

export default layout
