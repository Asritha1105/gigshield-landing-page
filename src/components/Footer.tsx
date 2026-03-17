import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <img src="/GigShield-1.png" alt="GigShield Logo" className="h-8 object-contain" />
          </div>
          <p className="text-sm text-muted-foreground">India's Professional Identity & Financial Security Platform for Gig Workers.</p>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold">Platform</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Income Passport</li>
            <li>GigScore</li>
            <li>Emergency Loans</li>
            <li>Health Insurance</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © 2026 GigShield. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
