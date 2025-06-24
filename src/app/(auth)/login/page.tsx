'use client'
import Image from "next/image";
import AuthNav from "@/components/AuthNav";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
export default function Home() {

  const [authState, setAuthState] = useState({
    email: "",
    password: "",
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
                   <p className="text-xl">Welcome Back! explore the worlds best UI's</p>
                  <div className="mt-4">
                  <Label htmlFor="email">Email</Label>
                  <Input placeholder="Enter your email" id = "email" type = "email" onChange={(e) => {setAuthState({...authState, email: e.target.value})}}/>
                  </div>
                  <div className="mt-4">
                  <Label htmlFor="password">Password</Label>
                  <Input placeholder="Enter your password" id = "email" type = "password" onChange={(e) => {setAuthState({...authState, password: e.target.value})}}/>
                  </div>
                  <div className="mt-4">
                    <Button className="w-full" onClick={submit}>Login</Button>
                  </div>
                    <div className="mt-2 text-center">
                       <strong className="font-bold">
                        Don't have an account?
                       </strong>
                       <Link href="/register" className="text-orange-300 ml-2">Register</Link>
                    </div>
                 </div>
             </div>
           </div>
        </div>
  ); 
}
