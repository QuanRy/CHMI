import Link from "next/link";

export default function Register() {
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

      <main className="flex flex-col center flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col w-full chat-container bg-white border border-gray-300 rounded-lg p-4">
          <div className="flex flex-col flex-grow overflow-y-auto">
            {/* Примеры диалога */}
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white rounded-lg p-2 m-1">
                Привет! Как дела?
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-gray-300 rounded-lg p-2 m-1">
                Привет! Хорошо, а у тебя?
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-blue-500 text-white rounded-lg p-2 m-1">
                У меня тоже все хорошо, спасибо!
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="text"
              className="flex-grow border border-gray-300 rounded-l-lg p-2"
              placeholder="Введите сообщение..."
            />
            <button className="bg-indigo-600 text-white rounded-r-lg p-2">
              Отправить
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 py-8">
        <div className="container mx-auto text-center text-gray-700">
          &copy; 2023 Language Translator Inc.
        </div>
      </footer>
    </div>
  );
}
