import Link from "next/link";
export default function SelectInterlocutor() {
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

      <main className="flex flex-col items-center justify-center flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Найдите собеседника по душе и предпочтениям
        </h1>

        <p className="text-center text-lg text-gray-600 mt-4">
          Добро пожаловать на нашу платформу для общения на разных языках. Здесь
          вы можете найти собеседника, который подходит вам по душе и
          предпочтениям. Заполните форму ниже и начните общение уже сегодня!
        </p>

        <form className="max-w-3xl mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Страна</label>
              <select className="border p-2 w-full">
                <option>Россия</option>
                <option>Франция</option>
                <option>Германия</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700">Настроение</label>
              <select className="border p-2 w-full">
                <option>Обычное</option>
                <option>Профессиональное</option>
                <option>Романтическое</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700">Тема</label>
              <select className="border p-2 w-full">
                <option>Путешествие</option>
                <option>Еда</option>
                <option>Фильмы</option>
                <option>Анектоды</option>
                <option>История</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700">Возраст</label>
              <select className="border p-2 w-full">
                <option>18-30</option>
                <option>30-45</option>
                <option>45+</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-indigo-500 text-white mt-4 py-2 px-6 rounded-lg hover:bg-indigo-600">
              Найти собеседника
            </button>
          </div>
        </form>
      </main>

      <footer className="bg-gray-200 py-8">
        <div className="container mx-auto text-center text-gray-700">
          &copy; 2023 Language Translator Inc.
        </div>
      </footer>
    </div>
  );
}
