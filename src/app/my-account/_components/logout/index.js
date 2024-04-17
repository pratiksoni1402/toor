'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import axios from "axios"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast";
export default function LogoutUser() {
  const router = useRouter();
  const logoutuser = () => {
    axios.post('/api/common/user-logout')
      .then((response) => {
        if (response.data.successMessage) {
          toast.success(response.data.successMessage, {
            duration: 3000,
            style: {
              border: '1px solid #754b2f',
              padding: '8px',
              color: '#f0e6e0',
              backgroundColor: '#754b2f',
            },
            iconTheme: {
              primary: '#f0e6e0',
              secondary: '#754b2f',
            },
          })
          router.push('/')
        }
      })
      .catch((error) => {
        toast.error("Error occured while logging out", error)
        console.log("Error Occured", error)
      })
  }
  return (
    <div className="logout-btn">
      <AlertDialog>
        <AlertDialogTrigger>Logout</AlertDialogTrigger>
        <AlertDialogContent className='xl:w-[25%] lg:w-[25%] md:w-[35%] sm:w-[40%] w-[90%]'>
          <AlertDialogHeader>
            <AlertDialogDescription className='font-roboto text-base text-accent'>
              Are you sure you want to logout ?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className='w-full md:mt-0 sm:mt-4 mt-4 bg-primary hover:bg-primary-foreground text-white hover:text-accent font-roboto text-base' onClick={logoutuser}>Yes</AlertDialogAction>
            <AlertDialogCancel className='w-full hover:bg-primary bg-primary-foreground border-primary-foreground hover:border-primary hover:text-white text-accent font-roboto text-base'>No</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  )
}