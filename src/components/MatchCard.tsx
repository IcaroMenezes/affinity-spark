import { FC } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface MatchCardProps {
  name: string;
  description: string;
  affinity: number;
}

const MatchCard: FC<MatchCardProps> = ({ name, description, affinity }) => {
  return (
    <Card className="p-6 bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-all duration-300 border border-blue-100">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-blue-900">{name}</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-blue-700">
              {affinity}%
            </span>
            <Progress
              value={affinity}
              className="w-20 bg-blue-200"
            />
          </div>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </Card>
  );
};

export default MatchCard;