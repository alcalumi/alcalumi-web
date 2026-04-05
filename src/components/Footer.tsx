export default function Footer() {
  return (
    <footer className="border-t border-[#222] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#00e599] to-[#00b377] flex items-center justify-center text-black font-bold text-xs">
              A
            </div>
            <span className="font-bold tracking-tight">alcalumi</span>
          </div>

          <div className="flex items-center gap-8 text-sm text-[#666]">
            <a
              href="#services"
              className="hover:text-white transition-colors"
            >
              Services
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#process" className="hover:text-white transition-colors">
              Process
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/miguelcabanes/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-[#888] hover:text-[#00e599] hover:border-[#00e599]/30 transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#1a1a1a] text-center text-xs text-[#444]">
          &copy; {new Date().getFullYear()} Alcalumi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
