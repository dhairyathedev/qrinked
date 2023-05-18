import React, { useEffect, useState } from "react"
import confetti from 'canvas-confetti';
import CreateDashboard from "@/components/Layout/CreateDashboard"
import { Button } from "@/components/ui/button"
import Connector from "@/components/ui/connector"
import Link from "next/link"
import { useRouter } from "next/router";
import { supabase } from "@/lib/client";
import { QRCode } from "react-qrcode-logo";
import html2canvas from "html2canvas";

export default function Complete() {
  const router = useRouter()
  const [value, setValue] = useState("")
  const {qr_slug} = router.query;
    useEffect(() => {
      console.log(qr_slug)
        const timeoutId = setTimeout(() => {
            confetti({
              spread: 120,
              count: 50,
              origin: { x: 0, y: 1 },
            });
            confetti({
              spread: 120,
              count: 50,
              origin: { x: 1, y: 1 },
            });
          }, 500);
          return () => clearTimeout(timeoutId);
    }, [qr_slug])

    useEffect(() => {
      async function loadQR() {
        const {data, error} = await supabase.from("qr_metadata").select("*").eq("qr_slug", qr_slug)
        const res = data[0]
        setValue(res.qr_metadata.value)
      }
      loadQR()
    }, [qr_slug])
    const handleDownloadJPEG = () => {
      const canvas = document.querySelector('#react-qrcode-logo') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.8); // Change the format and quality as needed
      const img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        const newCanvas = document.createElement('canvas');
        newCanvas.width = img.width;
        newCanvas.height = img.height;
        const newCtx = newCanvas.getContext('2d');
        newCtx.drawImage(img, 0, 0);
        const link = document.createElement('a');
        link.download = 'react-qrcode-logo.jpg';
        link.href = newCanvas.toDataURL();
        link.click();
      };
    };
    
    const handleDownload = () => {
      html2canvas(document.querySelector('#react-qrcode-logo') as any)
        .then(function (canvas) {
          const link = document.createElement('a');
          link.download = 'react-qrcode-logo.png';
          link.href = canvas.toDataURL();
          link.click();
        });
    }
  return (
    <div>
      <CreateDashboard>
        <div className="mx-auto mt-16 w-full border p-4 py-6 sm:w-4/6">
          <div className="flex flex-col items-center space-y-1">
            {/* <Image
              src="/assets/icons/qr-placeholder.svg"
              alt="QR Placeholder"
              width={180}
              height={180}
            /> */}
            { value ? 
            <QRCode
              logoOnLoad={() => console.log("Loaded")}
              value={value ? value : "loading"}
              fgColor="#072AC8"
              qrStyle="dots"
            />: <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            strokeWidth="1"
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
}
            <h3 className="text-lg font-semibold sm:text-2xl">QR Code Generated</h3>
            <p className="text-center text-textSecondary">
              Now share this QR Code across your network
            </p>
            <div className="flex w-full flex-col space-y-4 pt-4">
              <Button
                variant="subtle"
                className="w-full bg-bgSecondary text-base font-semibold text-textPrimary hover:bg-bgSecondary sm:text-lg"
                onClick={handleDownloadJPEG}
              >
                Download JPG
              </Button>
              <Button className="w-full bg-primary text-base font-semibold hover:bg-primary hover:opacity-90 sm:text-lg" onClick={handleDownload}>
                Download PNG
              </Button>
            </div>
          </div>
        </div>
      </CreateDashboard>
    </div>
  )
}
