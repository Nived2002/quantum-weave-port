import { useEffect, useState } from 'react';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`preloader transition-all duration-1000 ${isComplete ? 'opacity-0 scale-95' : ''}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="text-center">
          <h1 className="text-6xl font-light text-glow mb-4">
            Nived
          </h1>
          <p className="text-muted-foreground">Portfolio Loading...</p>
        </div>
        
        <div className="w-80 h-1 bg-muted rounded-full overflow-hidden">
          <div 
            className="progress-bar h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="text-sm text-muted-foreground">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Preloader;