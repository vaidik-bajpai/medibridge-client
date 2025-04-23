// src/app/home/layout.tsx
export default function HomeLayout({
        children,
    }: {
        children: React.ReactNode;
    }) {
        return (
        <div className="my-2 flex flex-col items-center w-full min-h-screen px-4">
            <div className="w-full max-w-5xl space-y-3">
                <header className="w-full bg-teal-800 text-lg flex justify-between py-2 px-6 rounded font-semibold text-white">
                    <div>Medibridge</div>
                    <div>Logout</div>
                </header>
                {children}
            </div>
        </div>
    );
}
  
  