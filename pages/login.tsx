import React, { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { Terminal, Waves } from "lucide-react"

import { authStatus } from "@/lib/auth"
import { supabase } from "@/lib/client"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function Login() {
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  useEffect(() => {
    async function loadUser() {
      if (await authStatus()) {
        router.push("/app/dashboard")
      }
    }

    loadUser()
  }, [router])

  async function handleLogin() {
    setEmail("")
    if (email.length > 0) {
      setLoading(true)
      const data = await supabase.auth
        .signInWithOtp({
          email: email,
          options: {
            emailRedirectTo: `${
              process.env.NODE_ENV === "development"
                ? "http://localhost:3000/login"
                : "https://qrinked.dhairyashah.dev/login"
            }`,
          },
        })
        .then(({ data, error }) => {
          if (!error) {
            setLoading(false)
            setEmailSent(true)
          }
        })
    } else {
      alert("Please enter email")
    }
  }
  return (
    <>
      <main className="grid min-h-screen grid-flow-col grid-cols-1 font-primary lg:grid-cols-2">
        <section className="m-2 mx-auto w-full max-w-lg p-4">
          <div>
            <Image
              src="/assets/logo.svg"
              alt="QRInked"
              width={140}
              height={200}
            />
          </div>
          <div className="mt-10">
            <h2 className="text-2xl">Welcome Friend! 👋</h2>
            <p className="mt-2 text-lg">
              Enter your credentials to continue create, manage, and track
              QR&apos;s
            </p>
          </div>
          <Alert
            className={`${emailSent ? "block" : "hidden"} my-6 font-primary animate-pulse`}
          >
            <Terminal className="h-4 w-4" />
            <AlertTitle>Magic Link Sent!</AlertTitle>
            <AlertDescription>
              Please check your email inbox and spam folder if you can&apos;t
              find it.
            </AlertDescription>
          </Alert>
          <div className={`${emailSent ? "mt-6 lg:mt-8" : "mt-12 lg:mt-16"}`}>
            <label className="block">
              <span className="text-lg font-semibold text-gray-700 sm:text-xl">
                Email Address
              </span>
              <input
                type="email"
                className=" mt-2
              block
              w-full
              rounded-md
              border-gray-300
              text-lg shadow-sm focus:border-primary focus:text-blue-700 focus:placeholder:text-blue-700 sm:text-xl"
                placeholder="john@apple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <Button
              className={`mt-4 h-10 w-full bg-primary text-xl font-semibold hover:bg-primary hover:opacity-90 flex items-center space-x-2`}
              onClick={handleLogin}
              disabled={loading}
            >
              <span>Login</span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${loading ? "block animate-spin" : "hidden"}`}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 6l0 -3"></path>
                <path d="M16.25 7.75l2.15 -2.15"></path>
                <path d="M18 12l3 0"></path>
                <path d="M16.25 16.25l2.15 2.15"></path>
                <path d="M12 18l0 3"></path>
                <path d="M7.75 16.25l-2.15 2.15"></path>
                <path d="M6 12l-3 0"></path>
                <path d="M7.75 7.75l-2.15 -2.15"></path>
              </svg>
            </Button>
          </div>
          <div className="mt-36 text-center text-xs uppercase text-textSecondary">
            made with love in india
          </div>
        </section>
        <section className="hidden w-full items-center justify-center bg-primary text-white lg:flex">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/assets/images/login-qr.svg"
              alt="QRInked"
              width={140}
              height={200}
            />
            <h3 className="text-2xl font-semibold">Enter the world of QR</h3>
            <p className="max-w-lg text-center text-xl font-semibold text-qrYellow">
              “Research has shown, that QR code has helped reach more users than
              the conventional way”
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
