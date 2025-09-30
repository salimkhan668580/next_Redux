import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Redux Counter App</h1>
      

      <Counter />
      

    </div>
  );
}
