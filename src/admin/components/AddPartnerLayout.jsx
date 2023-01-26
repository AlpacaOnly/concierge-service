
import { useNavigate } from "react-router-dom"

export default () => {
    const navigate = useNavigate();
    return (
        <>
        <div class="p-6 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
            
            <div class="bg-gray-100 rounded-xl shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div class="text-gray-600">
                    <p class="font-medium text-xl">Добавить партнера</p>
                    <p>Заполните все поля</p>
                </div>

                <div class="lg:col-span-2">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-7">
                    <div class="md:col-span-6 ">
                        <label for="full_name">Название компании</label>
                        <input type="text" name="full_name" id="full_name" class="outline-none h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    </div>

                    <div class="md:col-span-3">
                        <label for="OrganizationForm">Форма Организации</label>
                        <select name="OrganizationForm" id="address" class="outline-none h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                            <option>ТОО</option>
                            <option>ИП</option>
                            <option>АО</option>
                            <option>Другое</option>
                        </select>
                    </div>

                    <div class="md:col-span-3">
                        <label for="email">Почта</label>
                        <input type="text" name="email" id="email" class="outline-none h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="компания@gmail.com" />
                    </div>

                    <div class="md:col-span-2">
                        <label for="IIN">ИИН</label>
                        <input type="number" name="IIN" id="IIN" class="outline-none h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                    </div>

                    <div class="md:col-span-2">
                        <label for="code">КОД</label>
                        <input type="number" name="code" id="code" class="outline-none h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                    </div>

                    <div className="md:col-span-6">
                        <label for="contract">Договор</label>
                        <input type="file"
                                className="block h-10 mt-1 rounded w-full text-sm text-slate-500 file:mr-4 file:py-2 file:rounded-full file:border-0 file:bg-violet-50 file:text-violet-700 file:text-sm file:font-medium hover:file:bg-violet-100"
                                placeholder="Прикрепите договор"></input>
                    </div>

                    <div class="md:col-span-2 text-left">
                        <div class="inline-flex items-end">
                        <button onClick={() => navigate("/panel")} class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Отменить</button>
                        </div>
                    </div>

                    <div class="md:col-span-2 text-right">
                        <div class="inline-flex items-end">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Добавить</button>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
            </div>

        </div>
        </div>
        </>
    )
}