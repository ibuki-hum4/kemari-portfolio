// components/Hero.tsx のキャッチコピー部分をグラデーションアニメーションに変更

export default function Hero() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
        やーはりのサイトへようこそ
      </h1>
      <p className="mt-6 text-lg text-gray-700 max-w-xl">
        やーはりのサイトです。特に何も無いです。暇ならぜひ見てってください。
      </p>
    </section>
  );
}
