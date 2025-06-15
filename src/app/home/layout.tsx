"use client"

import { useRouter } from "next/navigation";

export default function HomeLayout({
        children,
    }: {
        children: React.ReactNode;
}) {
    const router = useRouter();

    async function handleLogout() {
        try {
            const response = await fetch(
                "http://localhost:8080/v1/user/logout",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );
            router.push("/home/signin")
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="my-2 flex flex-col items-center w-full min-h-screen px-4">
            <div className="w-full max-w-5xl space-y-3">
                <header className="w-full bg-teal-800 text-lg flex justify-between py-2 px-6 rounded font-semibold text-white">
                    <div>Medibridge</div>
                    <div className="hover:underline cursor-pointer" onClick={handleLogout}>Logout</div>
                </header>
                {children}
            </div>
        </div>
    );
}
  
  