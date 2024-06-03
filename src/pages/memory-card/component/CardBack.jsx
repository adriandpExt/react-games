/* eslint-disable react/prop-types */
export const CardBack = ({ onFlip }) => {
  return (
    <div
      className="border-8 p-3 h-60 w-56 text-center hover:cursor-pointer"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1be6fb4f-90e2-4aea-aa6f-4a0868ed2550/d45o4gl-86225850-4d9f-4a20-a722-98e701bfef59.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFiZTZmYjRmLTkwZTItNGFlYS1hYTZmLTRhMDg2OGVkMjU1MFwvZDQ1bzRnbC04NjIyNTg1MC00ZDlmLTRhMjAtYTcyMi05OGU3MDFiZmVmNTkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KIlS2gSNvCfWbTIpX0ZaScDzI7lPm8z2zHHBRuKE_K4')",
      }}
      onClick={onFlip}
    ></div>
  );
};

export default CardBack;
