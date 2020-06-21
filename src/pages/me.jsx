import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import SEO from '../components/SEO';
import ThemeContext from '../context/ThemeContext';
import projects from '../../data/projects';
import { Link } from 'gatsby';

const skillMarkupt = [
   {
      label: 'Pug / Jade',
      score: 80,
      stroke: '#E6C39A',
   },
   {
      label: 'HTML',
      score: 100,
      stroke: '#F16529',
   },
];
const skillDesign = [
   {
      label: 'CSS3',
      score: 89,
      stroke: '#2277FF',
   },

   {
      label: 'Sass / Scss',
      score: 100,
      stroke: '#CF649A',
   },
   {
      label: 'Less',
      score: 20,
      stroke: '#2F4D82',
   },
   {
      label: 'Bootstrap 4',
      score: 95,
      stroke: '#563D7C',
   },
   {
      label: 'Bulma',
      score: 70,
      stroke: '#00D1B2',
   },
   {
      label: 'Ant Design',
      score: 100,
      stroke: '#0D6EFF',
   },
   {
      label: 'Figma',
      score: 30,
      stroke: '#F24E1E',
   },
];
const skillProgramingLanguage = [
   {
      label: 'Javascript',
      score: 91,
      stroke: '#F7DF1E',
   },
   {
      label: 'Typescript',
      score: 95,
      stroke: '#017ACB',
   },
   {
      label: 'Nodejs',
      score: 89.5,
      stroke: '#509C43',
   },
   {
      label: 'SQL',
      score: 40,
      stroke: '#02FFFE',
   },
   {
      label: 'Php',
      score: 50,
      stroke: '#777BB3',
   },
];

const skillLibrerias = [
   {
      label: 'React',
      score: 84.6,
      stroke: '#53D2FA',
   },
   {
      label: 'React Hook Form',
      score: 98,
      stroke: '#BF1650',
   },
   {
      label: 'NextJs',
      score: 80,
      stroke: '#232323',
   },
   {
      label: 'Gatsby',
      score: 50,
   },
   {
      label: 'Redux',
      score: 96,
      stroke: '#764ABC',
   },
   {
      label: 'Moment / Day',
      score: 86,
      stroke: '#1F1F1F',
   },
   {
      label: 'jQuery',
      score: 70,
      stroke: '#21ACE2',
   },
   {
      label: 'Apollo Client',
      score: 40,
      stroke: '#3F20BA',
   },
   {
      label: 'Vuejs',
      score: 50,
      stroke: '#00C180',
   },
   {
      label: 'Vuex',
      score: 50.4,
      stroke: '#35495E',
   },
];

const skillTesting = [
   {
      label: 'Jest',
      score: 50,
      stroke: '#914D5B',
   },
];

const eachSkills = (data) => {
   return (
      <ul>
         {data.map((v, i) => (
            <li key={i}>
               <strong>{v?.label}</strong> - puntuación: <code>{v?.score}</code>
            </li>
         ))}
      </ul>
   );
};

export default class AboutMe extends Component {
   static contextType = ThemeContext;

   render() {
      return (
         <Layout>
            <Helmet title={`Acerca de Yoni Calsin - Greyblu `} />
            <SEO />
            <div className="container">
               <article>
                  <header className="page-header">
                     <h1>Sobre mí</h1>
                  </header>
                  <div className="page">
                     <p>
                        Hola, Soy <strong>Yoni Calsin</strong>, una
                        desarrollador frontend, apasionado de la programacion
                        web (frontend, backend), a lo largo de mi carrera he
                        tenido la posibilidad de trabajar en diversos proyectos
                        que me an proporcionado la oportunidad de ejecutar mis
                        conocimientos en estas areas y tambien para seguir
                        aprendiendo acerca de ellos
                     </p>
                     <p>
                        Me considero una persona con una amplia capacidad de
                        lógica, y el trabajo en equipo, aptitudes que sin duda
                        empleare a diario
                     </p>
                     <p>
                        Demasiado interesado en poner mis conocimientos de
                        Desarrollo Web Frontend y Backend para obtener un
                        resultado de calidad con la creatividad en su mejor
                        momento.
                     </p>

                     <h2>Habilidades Profesionales</h2>
                     <ul>
                        <li>
                           Maquetacion
                           {eachSkills(skillMarkupt)}
                        </li>
                        <li>Diseño {eachSkills(skillDesign)} </li>
                        <li>
                           Lenguajes de Programacion
                           {eachSkills(skillProgramingLanguage)}
                        </li>
                        <li>
                           Librerias
                           {eachSkills(skillLibrerias)}
                        </li>
                        <li>Testing {eachSkills(skillTesting)}</li>
                     </ul>

                     <h2>Habilidades Personales</h2>
                     <ul>
                        <li>
                           Siempre estoy dispuesto a aceptar los desafíos con la
                           gran dedicación.
                        </li>
                        <li>
                           Me exijo a mi mismo para realizar un trabajo de
                           calidad
                        </li>
                        <li>
                           Siempre me a encantado trabajar en equipo sabiendo
                           que es una de las claves para el éxito, e incluso me
                           gustaría delegar un equipo con la máxima
                           responsabilidad requerida
                        </li>
                     </ul>

                     <p>
                        Puede leer mis
                        <Link to="/blog">{' artículos '}</Link>o
                        <Link to="/contact">{' contactarme'}</Link>.
                     </p>

                     <h3>Yoni Calsin</h3>
                     <ul>
                        <li>
                           💻 trabaja como desarrollador frontend
                           (principalmente React/Redux, Node, Next, Typescript,
                           SCSS)
                        </li>
                        <li>👍 tiene un título imaginario en electrónica</li>
                        <li>🎉 puede hablar un poco de ingles</li>
                        <li>💾 tiene el mejor manejo de reddit y medium</li>
                        <li>🎹 puede tocar el piano y la guitarra</li>
                        <li>☕ necesita café</li>
                        <li>
                           ✍️ ha escrito alrededor de 5 tutoriales (¡hasta
                           ahora!)
                        </li>
                     </ul>
                     <p>
                        Este sitio web ha sido inspirado en la cuarentena. 🙃
                     </p>
                     <h2>Proyectos de código abierto</h2>
                     <ul>
                        {projects.map((v) => (
                           <li>
                              <a href={v.path}>{v.title}</a> - {v.description}
                           </li>
                        ))}
                     </ul>
                     <h2>Actualmente usando</h2>
                     <ul>
                        <li>
                           <strong>Computadora:</strong> Windows <q>10</q>
                        </li>
                        <li>
                           <strong>Host:</strong>{' '}
                           <a href="https://netlify.com">Netlify</a>
                        </li>
                        <li>
                           <strong>Editor:</strong>{' '}
                           <a href="https://code.visualstudio.com/">
                              Visual Studio Code
                           </a>
                        </li>
                        <li>
                           <strong>SSG:</strong>{' '}
                           <a href="https://gatsbyjs.org">Gatsby</a>
                        </li>
                        <li>
                           <strong>Tema:</strong>{' '}
                           <a href="https://taniarascia.github.io/new-moon">
                              New Moon
                           </a>
                        </li>
                        <li>
                           <strong>Newsletter:</strong>{' '}
                           <a href="https://substack.com">Substack</a>
                        </li>
                     </ul>
                  </div>
               </article>
            </div>
         </Layout>
      );
   }
}