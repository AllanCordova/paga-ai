import Link from "next/link";
import {
  Wallet,
  ArrowRight,
  CheckCircle2,
  Bot,
  Smartphone,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <section className="flex-1 container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 bg-secondary px-3 py-1 rounded-full text-xs font-medium text-secondary-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Novidade: Cobrança via Inteligência Artificial
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
            Acabe com o <span className="text-primary">climão</span> de cobrar
            os amigos.
          </h1>

          <p className="text-lg text-muted-foreground md:max-w-xl">
            O churrasco foi ótimo, mas cobrar é chato? Deixe que nosso
            <span className="font-semibold text-foreground">
              {" "}
              Robô Cobrador{" "}
            </span>
            envie as mensagens no WhatsApp e receba via Pix automaticamente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Link
              href="/register"
              className="h-12 px-8 rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:bg-primary/90 hover:scale-105 transition-all shadow-xl shadow-primary/20"
            >
              Criar Grupo Agora <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#funcionalidades"
              className="h-12 px-8 rounded-xl border border-input bg-background flex items-center justify-center font-medium hover:bg-secondary transition-colors"
            >
              Como funciona?
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md relative animate-in fade-in zoom-in duration-1000 delay-200">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50" />

          <div className="relative bg-white dark:bg-zinc-900 border border-border p-4 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-4 border-b border-border pb-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-sm">Robô do Paga Aí</p>
                <p className="text-xs text-green-600">Online agora</p>
              </div>
            </div>

            <div className="space-y-3 font-sans text-sm">
              <div className="bg-gray-100 dark:bg-zinc-800 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-none max-w-[85%]">
                <p>
                  Fala <strong>@Lucas</strong>! 👻
                </p>
                <p className="mt-1">
                  Passando pra lembrar dos <strong>R$ 50,00</strong> do
                  Churrasco de Domingo.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-zinc-800 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-none max-w-[85%]">
                <p>O Pix tá aqui em baixo 👇</p>
                <div className="mt-2 bg-white dark:bg-black p-2 rounded border border-dashed flex items-center gap-2 text-xs text-gray-500">
                  <Smartphone className="w-4 h-4" /> Chave Pix Copia e Cola...
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-primary text-white p-3 rounded-tl-xl rounded-bl-xl rounded-br-none rounded-tr-xl max-w-[85%] shadow-md">
                  <p>Paguei! Valeu robô 👍</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="funcionalidades"
        className="py-20 bg-secondary/30 border-y border-border"
      >
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Tudo que você precisa para não levar calote
            </h2>
            <p className="text-muted-foreground">
              Um sistema completo para viagens, repúblicas, churrascos e rachas
              de futebol.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Grupos Ilimitados</h3>
              <p className="text-muted-foreground text-sm">
                Crie grupos para a Casa de Praia, Presente do Chefe ou Netflix.
                Adicione os amigos via link.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors shadow-sm">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cobrança Automática</h3>
              <p className="text-muted-foreground text-sm">
                Escolha a personalidade do bot: "Educado", "Passivo-Agressivo"
                ou "Zueiro". Ele cobra por você.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors shadow-sm">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pix Direto</h3>
              <p className="text-muted-foreground text-sm">
                O dinheiro cai direto na sua conta. Geramos o QR Code e o Copia
                e Cola para facilitar o pagamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6 text-center">
        <div className="bg-primary/5 rounded-3xl p-12 border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para organizar as contas?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Junte-se a mais de 5.000 grupos que pararam de brigar por dinheiro e
            começaram a usar o Paga Aí.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/register"
              className="h-14 px-8 rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:bg-primary/90 text-lg transition-all shadow-lg"
            >
              Criar Conta Grátis
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> Sem cartão de
              crédito
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> Cancele quando
              quiser
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
