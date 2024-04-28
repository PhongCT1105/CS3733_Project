import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import { useToast } from "@/components/ui/use-toast.ts";

// Define the shape of the context value
interface AchievementContextType {
  achievements: string[];
  triggerAchievement: (achievement: string) => void;
}

// Default value for the context
const defaultValue: AchievementContextType = {
  achievements: [],
  // eslint-disable-next-line no-empty-function
  triggerAchievement: () => {},
};

// Object containing achievements with their corresponding messages
const achievementsWithMessages: Record<string, string> = {
  "Pathfinding Pioneer": "You have discovered your first path!",
  "Chance Trailblazer":
    "By clicking 'Feeling Lucky,' you've stumbled upon new paths and adventures. Keep clicking and exploring!",
  // Add more achievements here
};

// Create the context with explicit typing
const AchievementContext = createContext<AchievementContextType>(defaultValue);

// Props type for the AchievementProvider component
interface AchievementProviderProps {
  children: ReactNode;
}

// Provider component
export const AchievementProvider: React.FC<AchievementProviderProps> = ({
  children,
}) => {
  const { toast } = useToast();
  // State to manage achievements
  const [achievements, setAchievements] = useState<string[]>([]);

  // Function to trigger an achievement
  const triggerAchievement = useCallback(
    (achievement: string) => {
      if (!achievements.includes(achievement)) {
        setAchievements((prevAchievements) => [
          ...prevAchievements,
          achievement,
        ]);
        // Get the message for the achievement
        const message = achievementsWithMessages[achievement];
        if (message) {
          // Trigger the toast notification with the message
          toast({
            title: "Achievement Unlocked",
            description: message,
          });
        }
      }
    },
    [achievements, toast],
  ); // Include dependencies in useCallback's dependency array

  // Effect to load achievements from browser storage on component mount
  useEffect(() => {
    const storedAchievements = localStorage.getItem("achievements");
    if (storedAchievements) {
      setAchievements(JSON.parse(storedAchievements));
    }
  }, []);

  // Effect to update browser storage when achievements change
  useEffect(() => {
    localStorage.setItem("achievements", JSON.stringify(achievements));
  }, [achievements]);

  // Memoized context value
  const contextValue = React.useMemo(
    () => ({ achievements, triggerAchievement }),
    [achievements, triggerAchievement],
  );

  return (
    <AchievementContext.Provider value={contextValue}>
      {children}
    </AchievementContext.Provider>
  );
};

// Custom hook to consume the context
// eslint-disable-next-line react-refresh/only-export-components
export const useAchievements = () => useContext(AchievementContext);
