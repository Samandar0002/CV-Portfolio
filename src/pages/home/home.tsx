import React from 'react';
import { BackgroundImg, PersonalImg } from '../../assets/images/image';
import { useTranslation } from 'react-i18next';
const Home: React.FC = () => {
    const  { t } = useTranslation();
    return (
        <div className="relative min-h-screen p-4">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundImg})`, filter: 'blur(8px)' }}></div>
            <div className="relative flex flex-col items-center justify-center min-h-screen p-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <img src={(PersonalImg)} alt="Samandar" className="w-[10rem] h-[10rem] rounded-full mb-4 border-2 border-blue-500"/>
                <h1 className="text-4xl md:text-5xl font-bold font-sans text-[#254CF8] mb-4 animate-bounce">{t('Salom, Mening ismim Samandar!')}</h1>
                <p className="text-md md:text-xl text-[#1A1A1A] mb-8 animate-fadeIn max-w-2xl text-center">
                   {t('Men Frontend developerman. Kreativlik va texnologiya chegaralarini kengaytirishga intiluvchi bir kishi sifatida, bu portfolioni sizga mening ishlarimni va loyihalarimni namoyish etish uchun yaratdim. Har bir loyiha mening mahoratim, ijodkorligim va har xil muammolarni hal qilishda qo`llagan yondashuvlarimni aks ettiradi.')}
                </p>
                <a href="/about" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 ease-in-out animate-pulse">{t('Portfolio ga o`tish')}</a>
            </div>
        </div>
    );
}

export default Home;
