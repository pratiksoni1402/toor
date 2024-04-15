'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useModalStore from '@/lib/store';
import { Mail } from 'lucide-react';
export default function ContactModal() {
  const isSignupModalOpen = useModalStore((state) => state.isSignupModalOpen);
  const closeSignupModal = useModalStore((state) => state.closeSignupModal);

  return (
    <div className={isSignupModalOpen ? 'modal open' : 'modal'}>
      <div className="content-wrapper">
        <Dialog isOpen={signupModal.show} onDismiss={() => set}>
          <DialogTrigger>
            <Mail />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}