import MatchmakingForm from "@/components/MatchmakingForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Encontre Conexões Significativas
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Nossa IA analisa interesses e experiências para conectar você com
            pessoas que compartilham sua visão e paixões
          </p>
        </div>

        <MatchmakingForm />
      </div>
    </div>
  );
};

export default Index;