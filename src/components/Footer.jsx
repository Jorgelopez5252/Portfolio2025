export const Footer = () => {
  return (
    <footer className="py-6 px-3 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-center text-center gap-4">
     <p className="text-sm text-muted-foreground">
      &copy; {new Date().getFullYear()} Jorge A. Lopez. All rights reserved. (Built with React, Tailwind CSS, and Vite)
      </p>
    </footer>
  );
};
