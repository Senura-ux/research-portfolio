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
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
