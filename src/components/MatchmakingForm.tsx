import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import MatchCard from "./MatchCard";
import { generateMatches } from "@/lib/gemini";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  interest: string;
  location: string;
}

interface Match {
  name: string;
  description: string;
  affinity: number;
}

const MatchmakingForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    interest: "",
    location: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [matches, setMatches] = useState<Match[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const generatedMatches = await generateMatches(formData);
      setMatches(generatedMatches);
      console.log(generatedMatches);
    } catch (error) {
      console.error("Erro ao buscar matches:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const sortMatchesByAffinity = (matches: Match[], order: 'asc' | 'desc') => {
    return [...matches].sort((a, b) => {
      return order === 'desc' ? b.affinity - a.affinity : a.affinity - b.affinity;
    });
  };

  const handleSortToggle = () => {
    setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc');
  };

  const sortedMatches = sortMatchesByAffinity(matches, sortOrder);

  return (
    <div className="w-full max-w-4xl mx-auto p-6  bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-8 mb-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-blue-900">
              Nome
            </Label>
            <Input
              id="name"
              placeholder="Seu nome completo"
              className="border-blue-200 focus:border-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest" className="text-blue-900">
              Área de Interesse
            </Label>
            <Input
              id="interest"
              placeholder="Ex: Tecnologia, Arte, Educação"
              className="border-blue-200 focus:border-blue-500"
              value={formData.interest}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-blue-900">
              Localização
            </Label>
            <Input
              id="location"
              placeholder="Sua cidade"
              className="border-blue-200 focus:border-blue-500"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className={cn(
            "w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 md:py-4",
            isLoading && "cursor-wait"
          )}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Buscando conexões...
            </>
          ) : (
            "Buscar Conexões"
          )}
        </Button>
      </form>

      {matches.length > 0 && (
        <div className="space-y-6 animate-in slide-in-from-bottom duration-700">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-blue-900">
              Conexões Encontradas
            </h2>
            <Button
              onClick={handleSortToggle}
              variant="outline"
              className="flex items-center gap-2"
            >
              Ordenar por Afinidade
              {sortOrder === 'desc' ? '↓' : '↑'}
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sortedMatches.map((match, index) => (
              <MatchCard key={index} {...match} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchmakingForm;