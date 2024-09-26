export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-[#7F56D9] transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
