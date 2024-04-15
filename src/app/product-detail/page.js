'use client'
import { Mail } from 'lucide-react';
import useModalStore from '@/lib/store';

import { Button } from '@/components/ui/button';
export default function Form() {
  const openSignupModal = useModalStore((state) => state.openSignupModal);

  return (
    <div className="contact-modal">
      <div className="container">
        <div className="menu-wrapper h-screen w-full mx-auto text-center">
          <Button onClick={openSignupModal} className='cursor-pointer'>
            <Mail />
          </Button>
        </div>
      </div>
    </div>
  )
}