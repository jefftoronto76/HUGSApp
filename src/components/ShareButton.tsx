import { Share2 } from 'lucide-react';
import { useState } from 'react';

export default function ShareButton() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    const title = 'Share with someone supporting recovery';

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        // User cancelled or error occurred
        if ((err as Error).name !== 'AbortError') {
          fallbackCopy(url);
        }
      }
    } else {
      fallbackCopy(url);
    }
  };

  const fallbackCopy = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors duration-200"
      >
        <Share2 size={18} />
        <span>Share with someone supporting recovery</span>
      </button>

      {showConfirmation && (
        <div className="absolute top-full mt-2 left-0 bg-slate-800 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap">
          Link copied
        </div>
      )}
    </div>
  );
}
