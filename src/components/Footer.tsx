export default function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="font-display text-lg font-semibold">Rose Tuition Centre</div>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Grow Smarter. Learn Better. A futuristic academic ecosystem for ambitious learners.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <div className="mb-2 font-medium text-foreground">Visit</div>
          Chennai, Tamil Nadu, India
          <div className="mt-3 font-medium text-foreground">Hours</div>
          Weekdays: 4 PM – 9 PM<br />
          Weekends: 9 AM – 6 PM
        </div>
        <div className="text-sm text-muted-foreground">
          <div className="mb-2 font-medium text-foreground">Contact</div>
          <a className="block hover:text-foreground" href="tel:+919025191524">+91 9025191524</a>
          <a className="block hover:text-foreground" href="mailto:info@rosetuitioncentre.com">info@rosetuitioncentre.com</a>
          <a className="block hover:text-foreground" href="https://www.rosetuitioncentre.com">rosetuitioncentre.com</a>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Rose Tuition Centre. All rights reserved.
      </div>
    </footer>
  );
}
