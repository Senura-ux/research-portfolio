import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI EyeDx — Multi-Disease Diagnosis of Diabetes-Related Eye Disorders",
  description:
    "An Explainable Deep Learning Framework for Multi-Disease Diagnosis and Disease-Specific Assessment of Diabetes-Related Eye Disorders. Group R26-IT-043, SLIIT.",
  keywords:
    "diabetic retinopathy, glaucoma, cataract, DME, AI diagnosis, deep learning, explainable AI, SLIIT, R26-IT-043",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
