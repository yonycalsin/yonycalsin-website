import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import SEO from '../components/SEO';
import ThemeContext from '../context/ThemeContext';
import projects from '../../data/projects';
// import { Link } from 'gatsby';
import previewInstagramTemplate from '../../content/previews/instagram-template.png';
import previewPacolor from '../../content/previews/pacolor.gif';
import previewAprende from '../../content/previews/aprende.gif';
import previewFiverr from '../../content/previews/fivver.png';
import previewFormUnique from '../../content/previews/form-unique.gif';
import previewChat from '../../content/previews/chat.png';
import previewCodeBlog from '../../content/previews/code-blog.png';
import previewCodeTemplate from '../../content/previews/code-template.png';
import previewNextjsBlog from '../../content/previews/nextjs-blog.png';
import avatar from '../images/avatar.png';

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

const createdProjects = [
   {
      title: 'Una aplicación meteorológica',
      image:
         'https://flutterawesome.com/content/images/2019/06/Flutter-Weather.jpg',
      source: ['Flutter', 'Dart', 'Cupertino Icons', 'Material Design'],
      code: 'https://github.com/yonycalsin/dart-wheater',
      pending: true,
   },
   {
      title: 'Aplicacion de Herramientas Basicas para Blogers',
      image:
         'https://i.ibb.co/4FRhtRH/me-tools-vercel-app-Laptop-with-Hi-DPI-screen.png',
      source: [
         'React',
         'NextJs',
         'Typescript',
         'Scss',
         'Less',
         'Ant Design',
         'prettier',
      ],
      demo: 'https://me-tools.vercel.app/',
      code: 'https://github.com/yonycalsin/my-tools',
   },
   {
      title: 'Extension de navegador, de estudio biblico diariamente',
      image: 'https://i.ibb.co/RvL1x8k/devocion-extension.png',
      source: [
         'Html',
         'Css',
         'Bulma',
         'ncp',
         'Typescript',
         'Prepros',
         'Nodejs',
      ],
   },
   {
      title: 'Generador de paleta de colores',
      image: previewPacolor,
      source: ['React', 'Scss', 'Typescript', 'Redux'],
      demo: 'https://pacolor.vercel.app/',
   },
   {
      title: 'Plataforma de educacion dinamica',
      image: previewAprende,
      source: [
         'React',
         'NextJs',
         'Redux',
         'Typescript',
         'Bootstrap 4',
         'NestJs',
         'MongoDB',
         'Graphql',
         'Mongoose',
      ],
   },
   {
      title: 'Administrador de contraseñas',
      image: 'https://source.unsplash.com/collection/190727/1600x900',
      source: ['Vuejs', 'Vuex', 'Laravel', 'Php', 'Mysql', 'CoreUi'],
      pending: true,
   },
   {
      title: 'Generador de formularios',
      image: previewFormUnique,
      source: [
         'React',
         'NextJs',
         'Typescript',
         'Ant Design',
         'Scss',
         'styled-jsx',
         'Redux',
         'Typescript',
         'NestJs',
         'Sequelize',
         'Graphql',
         'Mysql',
         'sql',
         'Apollo Client',
      ],
   },
   {
      title: 'Sistema de contratacion de freelancers',
      image: previewFiverr,
      source: [
         'React',
         'NextJs',
         'Typescript',
         'Ant Design',
         'Scss',
         'styled-jsx',
         'Redux',
         'Typescript',
         'NestJs',
         'Sequelize',
         'Graphql',
         'Mysql',
         'sql',
      ],
   },

   {
      title: 'Template de venta de codigos',
      image: previewCodeTemplate,
      source: ['React', 'Typescript', 'Scss'],
   },
   {
      title: 'Blog with NextJs',
      image: previewNextjsBlog,
      source: ['React', 'NextJs', 'Scss', 'Markdown', 'NodeJs'],
      demo: 'https://github.com/yonycalsin/my-nextjs-blog',
   },
   {
      title: 'Instagram Template',
      image: previewInstagramTemplate,
      source: ['HTML', 'Jade', 'Css', 'Scss', 'Bulma', 'Typescript'],
   },
   {
      title: 'Messenger Template',
      image: previewChat,
      source: ['HTML', 'Jade', 'Bootstrap'],
   },
];

export default class AboutMe extends Component {
   static contextType = ThemeContext;

   render() {
      return (
         <Layout>
            <Helmet title={`Acerca de Yony Calsin - Desarrollador Frontend `} />
            <SEO />
            <div className="container">
               <article>
                  <header className="page-header fx fx-cnw fx-cc">
                     <h1>Sobre mí</h1>
                     <img
                        src={avatar}
                        className="newsletter-avatar"
                        alt="Yony Calsin"
                        style={{
                           border: '3px dashed white',
                           borderRadius: '50%',
                           width: 150,
                           height: 150,
                           marginBottom: 20,
                        }}
                     />
                  </header>
                  <div className="page">
                     <p>
                        Hola, Soy <strong>Yony Calsin</strong>, un desarrollador
                        frontend, apasionado de la programacion web (frontend,
                        backend), a lo largo de mi carrera he tenido la
                        posibilidad de trabajar en diversos proyectos que me an
                        proporcionado la oportunidad de ejecutar mis
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

                     <h2>
                        Projectos Creados{' '}
                        <u style={{ color: '#aaa' }}>
                           ({createdProjects.length})
                        </u>
                     </h2>
                     <p>
                        Los siguientes proyectos no son todos los que he creado
                        a lo largo de mi carrera, por razones de privacidad no
                        podré mostrar algunos de ellos 😎
                     </p>
                     <div className="created-projects fx fx-rw fx-jcsb fx-aic">
                        {createdProjects.map((v, i) => (
                           <div className="item" key={i}>
                              {v.pending && (
                                 <div className="pending">Pendiente</div>
                              )}
                              <img
                                 src={v.image}
                                 alt=""
                                 draggable={false}
                                 onContextMenu={(e) => e.preventDefault()}
                              />
                              <div className="content fx fx-cc fx-cnw">
                                 <h4>{v.title}</h4>
                                 <p>{v.source.join(', ')}</p>
                                 {v.demo && (
                                    <a
                                       href={v.demo}
                                       target="blank"
                                       rel="noopener noreferrer"
                                    >
                                       Preview
                                    </a>
                                 )}
                                 {v.code && (
                                    <a
                                       href={v.code}
                                       target="blank"
                                       rel="noopener noreferrer"
                                    >
                                       Code
                                    </a>
                                 )}
                              </div>
                           </div>
                        ))}
                     </div>

                     {/* <p>
                        Puede leer mis
                        <Link to="/blog">{' artículos '}</Link>o
                        <Link to="/contact">{' contactarme'}</Link>.
                     </p> */}

                     <h3>Yony Calsin</h3>
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
