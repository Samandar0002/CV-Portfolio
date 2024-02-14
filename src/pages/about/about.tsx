
import React, {  } from 'react';
import {  Csslogo, Githublogo, Html5logo, Jslogo, Mongologo, Postman, Reactlogo, Reduxlogo, Tslogo } from '../../assets/logo/index';

interface SkillProps {
  Component: React.ElementType; 
  name: string; 
}


const Skill: React.FC<SkillProps> = ({ Component, name }) => {
  return (
    <div className="skill-wrapper"> 
      <div className="skill-container">
        <Component className="skill-logo" />
        <p className="skill-name">{name}</p>
      </div>
    </div>
  );
};


const About: React.FC = () => {
  const skills = [
    { name: 'HTML5', Component: Html5logo },
    { name: 'CSS', Component: Csslogo },
    { name: 'JavaScript', Component: Jslogo },
    { name: 'TypeScript', Component: Tslogo },
    { name: 'React', Component: Reactlogo },
    { name: 'Redux', Component: Reduxlogo },
    { name: 'MongoDB', Component: Mongologo },
    { name: 'Postman', Component: Postman },
    { name: 'Git', Component: Githublogo },
  ];

  return (
    <div className="min-h-screen bg-[#ACCBE1] p-10">
    <h1 className="text-5xl text-center font-bold text-gray-800 mb-[3rem]">About Me</h1>
    <p className="  text-center mb-10">Hozirgi vaqtda men PDP Academy da amaliyot o`tamoqdaman. Dasturlash va texnologiyalar dunyosiga bo'lgan qiziqishim maktab davrlarimda boshlangan va shu kundan boshlab, o'z bilim va ko'nikmalarimni doimiy ravishda rivojlantirib kelmoqdaman.</p>
    <p className="text-center mb-10">Kasbiy hayotimdan tashqari, men yangi texnologiyalarni o'rganish ot minish va tennis o'ynash bilan shug'ullanishni yaxshi ko'raman. Bu menga yangi g'oyalarni o'ylab topishda ilhom beradi va kasbiy mahoratlarimni yangi sohalarga qo'llash imkoniyatini beradi.</p>
   <p className="text-center mb-10">Kelajakda, men katta kompaniya  ga erishishni maqsad qilganman. Bu yo'lda, men doimiy ravishda o'rganishni, yangi texnologiyalarni o'zlashtirishni va kasbiy doirada o'sishni davom ettirmoqchiman. Men ishonaman ki, muntazam o'rganish va o'z ustida ishlash orqali, men o'z sohamda yuqori natijalarga erishishim mumkin.</p>
   <h1 className='text-5xl text-center font-bold text-gray-800 mb-[3rem]'>Skills</h1>
    <div className="about-container ">
      {skills.map(({ name, Component }) => (
        <Skill key={name} name={name} Component={Component} />
      ))}
    </div>
  </div>
  );
}

export default About;
