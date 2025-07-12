export default function LayoutAutentica({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <div className="">
      <main className="flex-1 h-full pt-{-16px}">
        {children} 
      </main>
    </div>
  );
}