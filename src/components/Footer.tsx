import logoAsset from "@/assets/JourneySingh.jpg";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={logoAsset}
            alt="Journey Singh"
            className="h-9 w-9 rounded-full object-cover"
          />
          <div>
            <span className="text-sm text-muted-foreground block">
              © {new Date().getFullYear()} Journey Singh. Trek • Travel • Leisure.
            </span>

            <a
              href="tel:+919009503668"
              className="text-sm text-accent hover:underline"
            >
              📞 +91 9009503668
            </a>
          </div>
        </div>

        <div className="flex gap-5 text-sm text-muted-foreground">
          <a href="#" className="hover:text-accent">Instagram</a>
          <a href="#" className="hover:text-accent">YouTube</a>
          <a href="#" className="hover:text-accent">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}