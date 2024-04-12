"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import './style.css';
Button
export default function SingleSignIn() {
  return (
    <div className="single-sign-on">
      <Button type="submit" className='sso-button'>
        <Image src='/uploads/images/logo/google-icon.svg' alt='Logo' width={25} height={25} />
        <span className="btn-title">Signin with Google</span>
      </Button>
    </div>
  )
}