import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-gray-100 font-sans flex flex-col min-h-screen">
      <header className="bg-indigo-600">
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link className="text-white font-bold text-2xl" href="/">
            Общение на разных языках
          </Link>

          <ul className="flex space-x-4 text-lg">
            <li>
              <Link className="text-gray-200 hover:text-white" href="/">
                Главная
              </Link>
            </li>
            <li>
              <Link className="text-gray-200 hover:text-white" href="/register">
                Регистрация
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-200 hover:text-white"
                href="/selectedPeople"
              >
                Поиск собеседника
              </Link>
            </li>
            <li>
              <Link className="text-gray-200 hover:text-white" href="/friends">
                Друзья
              </Link>
            </li>
            <li>
              <Link className="text-gray-200 hover:text-white" href="/chat">
                Чат
              </Link>
            </li>
            <li>
              <Link className="text-gray-200 hover:text-white" href="/profile">
                Профиль
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Общение без границ на любом языке с помощью наших инструментов
          искусственного интеллекта для перевода
        </h1>

        <p className="text-lg text-gray-600 mt-4">
          Наше революционное приложение использует передовые технологии
          искусственного интеллекта и обработки естественного языка для
          мгновенного перевода вашей речи на язык вашего выбора. Прощайте
          языковым барьерам и общайтесь с людьми по всему миру!
        </p>

        <Image
          src="/girl.png"
          alt="Woman using translator app"
          width={500}
          height={300}
          className="mt-8 rounded-lg shadow-lg"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Основные преимущества
        </h2>

        <ul className="list-disc list-inside">
          <li>Мгновенный перевод голоса в реальном времени</li>
          <li>Точные переводы с использованием искусственного интеллекта</li>
          <li>Поддержка более 100 языков</li>
          <li>Мгновенная производительность</li>
          <li>Удобное использование приложения</li>
        </ul>

        <Link
          href="/"
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg inline-block mt-4 hover:bg-indigo-600"
        >
          Начать бесплатную пробную версию
        </Link>
      </main>

      <footer className="bg-gray-200 py-8">
        <div className="container mx-auto text-center text-gray-700">
          &copy; 2023 Language Translator Inc.
        </div>
      </footer>
    </div>
  );
}
