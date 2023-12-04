import Link from "next/link";
import Image from "next/image";

export default function Profile() {
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
              <Link className="text-gray-200 hover:text-white" href="/profile">
                Профиль
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="md:flex">
          <div className="mb-4 md:mb-0 md:w-1/4">
            <h2 className="text-2xl font-semibold">Профиль</h2>

            <nav className="mt-4 text-gray-600">
              <a href="#" className="block py-2 hover:text-indigo-500">
                Информация
              </a>
              <a href="#" className="block py-2 hover:text-indigo-500">
                Настройки
              </a>
            </nav>
          </div>

          <div className="md:w-3/4 md:pl-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">
              Персональные данные
            </h1>

            <Image
              src="/Nikolay.png"
              alt=""
              className="w-24 h-24 rounded-full mb-4"
              width={48}
              height={48}
            />

            <label className="text-gray-700" htmlFor="name">
              Имя
            </label>
            <input
              id="name"
              className="border p-2 w-full mb-4"
              type="text"
              value="Николай"
            />

            <label className="text-gray-700" htmlFor="bio">
              БИО
            </label>
            <textarea id="bio" className="border p-2 w-full mb-4 h-32">
              Привет! Меня зовут Николай, я студент и увлекаюсь изучением
              иностранных языков. Я люблю путешествовать, читать книги и
              общаться с интересными людьми. Буду рад найти собеседника для
              общения на разных языках. Давайте обменяемся знаниями и вместе
              погрузимся в мир языков
            </textarea>

            <label className="text-gray-700" htmlFor="age">
              Возраст
            </label>
            <input
              id="age"
              className="border p-2 w-full mb-4"
              type="number"
              value="21"
            />

            <label className="text-gray-700" htmlFor="location">
              Место работы
            </label>
            <input
              id="location"
              className="border p-2 w-full mb-4"
              type="text"
              value="ВолгГТУ"
            />

            <button className="bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600">
              Сохранить профиль
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 py-8 flex-shrink-0">
        <div className="container mx-auto text-center text-gray-700">
          &copy; 2023 Language Translator Inc.
        </div>
      </footer>
    </div>
  );
}
