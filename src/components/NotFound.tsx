import { Link } from "react-router-dom";
import { Home, Phone } from "lucide-react";

import logo from "@/assets/logos/logo.svg";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#000827] px-6">
      <div className="max-w-3xl text-center">
        {/* Logo */}

        <div className="mb-8 flex justify-center">
          <div className="rounded-xl bg-white p-3 shadow-lg">
            <img src={logo} alt="iTEK Computers" className="h-17.5 w-auto" />
          </div>
        </div>

        {/* Error Code */}

        <h1 className="from-brand-light to-accent bg-linear-to-r bg-clip-text text-[120px] leading-none font-extrabold text-transparent md:text-[180px]">
          404
        </h1>

        {/* Heading */}

        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Oops! Page Not Found</h2>

        {/* Description */}

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/70">
          Looks like this page has crashed harder than a laptop with a failed hard drive. Don't
          worry, our technicians can find their way back.
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="from-brand-light to-accent inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r px-8 py-4 font-semibold text-white transition hover:opacity-90"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <a
            href="tel:+918148300494"
            className="border-brand hover:bg-brand/10 inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 font-semibold text-white transition"
          >
            <Phone size={18} />
            Call Support
          </a>
        </div>

        {/* Bottom Text */}

        <p className="mt-10 text-sm text-white/40">
          iTEK Computers • Chennai Laptop & Computer Repair Specialists
        </p>
      </div>
    </div>
  );
};

export default NotFound;
