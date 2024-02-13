import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
    const { t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('LANGUAGE') || 'en');

    useEffect(() => {
        changeLanguage(selectedLanguage);
    }, [selectedLanguage]);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng).then(() => {
            localStorage.setItem('LANGUAGE', lng);
            setSelectedLanguage(lng);
        });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white p-4 flex justify-between items-center">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/" className="hover:text-gray-300">{t('Home')}</Link>
                </li>
                <li>
                    <Link to="/about" className="hover:text-gray-300">{t('About')}</Link>
                </li>
                <li>
                    <Link to="/projects" className="hover:text-gray-300">{t('Projects')}</Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:text-gray-300">{t('Contact')}</Link>
                </li>
            </ul>
            <select
             className="bg-white text-gray-800 border-gray-300 rounded-lg border px-3 py-1.5 hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500"
             onChange={e => setSelectedLanguage(e.target.value)} 
             value={selectedLanguage}
            >
            <option value="uz">{t('Uz')}</option>
            <option value="ru">{t('Ru')}</option>
            <option value="en">{t('En')}</option>
         </select>
        </nav>
    );
};

export default Navbar;
