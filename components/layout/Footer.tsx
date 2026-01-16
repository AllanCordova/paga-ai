import Link from "next/link";
import { Wallet, Instagram, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* --- GRID SUPERIOR (Links e Info) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Coluna 1: Marca e Missão */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-primary/10 rounded-lg">
                <Wallet className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-lg tracking-tight">Paga Aí</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A maneira mais fácil de dividir contas, cobrar amigos e manter a
              paz no grupo. Sem taxas escondidas.
            </p>
          </div>

          {/* Coluna 2: Produto */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-foreground text-sm">Produto</h4>
            <Link
              href="/#funcionalidades"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Funcionalidades
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Planos e Preços
            </Link>
            <Link
              href="/updates"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Novidades (Log)
            </Link>
          </div>

          {/* Coluna 3: Empresa */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-foreground text-sm">Empresa</h4>
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre Nós
            </Link>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </Link>
          </div>

          {/* Coluna 4: Legal */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-foreground text-sm">Legal</h4>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Termos de Uso
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacidade
            </Link>
            <Link
              href="/security"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Segurança
            </Link>
          </div>
        </div>

        {/* --- DIVISOR --- */}
        <div className="h-px w-full bg-border mb-8" />

        {/* --- BARRA INFERIOR (Copyright e Redes) --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Paga Aí Tecnologia Ltda. Todos os direitos
            reservados.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-full"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-full"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-full"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-full"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
