export default function LayoutPages({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <div className="h-full">
      <main className="flex-1 h-full pt-16">
        {children} 
      </main>
    </div>
  );
}