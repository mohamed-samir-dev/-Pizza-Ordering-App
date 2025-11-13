export const BackgroundEffects = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-32 h-32 sm:w-72 sm:h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-red-500/10 rounded-full blur-3xl"></div>
    </>
  );
};