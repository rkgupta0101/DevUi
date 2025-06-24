'use client'
import Image from "next/image";
import AuthNav from "@/components/AuthNav";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
export default function Register() {

  const [authState, setAuthState] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation:"",
  });

  const submit = () => {
    console.log("the auth is",authState);
  }
  return (
        <div className="h-screen">
          <AuthNav />
           <div className="grid grid-cols-1 lg:grid-cols-2">
             <div className="hidden lg:block">
              <Image src="/images/design (1).svg" alt="auth side logo" width={50} height={50} className="h-screen w-full"/>
             </div>
             <div className="flex justify-center items-center mt-20 lg:mt-0">
                 <div className="px-10 lg:px-32 w-full">
                  <h1 className="text-5xl font-bold">DevUI</h1>
                   <p className="text-xl">Explore the worlds best designs for your next project</p>

                   <div className="mt-4">
                  <Label htmlFor="name">Name</Label>
                  <Input placeholder="Enter your name" id = "name" type = "text" onChange={(e) => {setAuthState({...authState, name: e.target.value})}}/>
                  </div>

                  <div className="mt-4">
                  <Label htmlFor="email">Email</Label>
                  <Input placeholder="Enter your email" id = "email" type = "email" onChange={(e) => {setAuthState({...authState, email: e.target.value})}}/>
                  </div>
                  <div className="mt-4">
                  <Label htmlFor="password">Password</Label>
                  <Input placeholder="Enter your password" id = "password" type = "password" onChange={(e) => {setAuthState({...authState, password: e.target.value})}}/>
                  </div>
                  <div className="mt-4">
                  <Label htmlFor="password">Password Confirmation</Label>
                  <Input placeholder="Enter your password confirmation" id = "password" type = "password" onChange={(e) => {setAuthState({...authState, password_confirmation: e.target.value})}}  />
                  </div>
                  <div className="mt-4">
                    <Button className="w-full" onClick={submit}>Register</Button>
                  </div>
                    <div className="mt-2 text-center">
                       <strong className="font-bold">
                        Already have an account?
                       </strong>
                       <Link href="/login" className="text-orange-300 ml-2">Login</Link>
                    </div>
                 </div>
             </div>
           </div>
        </div>
  ); 
}
