  const content = {
    en: `
      <mark>hi</mark>, I am a <mark>social science researcher</mark> with a <mark>Ph.D. in sociology</mark> and a background in <a href="http://mpnyka.github.io/journalism.html" target="_blank"><mark>journalism</mark></a>. <br><br>
      I have over <mark>10 years of experience conducting both qualitative and quantitative research </mark>
      across academic and industry settings. My doctoral research investigated <mark>social closure categories</mark>, such as race, ethnicity and nation: how individuals socially construct them, what consequences these have for inequality, and how we can <mark>design better policies</mark> to alleviate these. I use a variety of methods with a focus on <mark>computational social science, statistics, and causal inference</mark>. My dissertation work involved designing, implementing, and analyzing an original survey and experiment distributed across 5 countries. Known for using innovative methods, I strive to translate complex insights into actionable outcomes. I currently work as <mark>Postdoctoral Research Scientist </mark> using computational methods and advanced causal inference strategies to understand policy effects on public health. <br><br>
      
      I can speak <mark>catalan</mark>, <mark>spanish</mark>, <mark>english</mark> and some <mark>french</mark> with humans; <mark>R</mark>, <mark>python</mark>, <mark>sql</mark>, <mark>html</mark>, <mark>css</mark>, <mark>javascript</mark> and some <mark>Stan</mark> with computers. <br><br>
      I have experience teaching <mark>programming languages</mark>, <mark>statistics</mark>, and <mark>causal inference</mark> to graduate students, as well as <mark>research methods</mark> to undergrads.<br><br>
    `,
    ca: `
        <mark>hola</mark>, sóc una <mark>investigadora en ciències socials</mark> amb un <mark>doctorat en sociologia </mark>i un passat en periodisme.<br><br>
        Tinc més de <mark>10 anys d'experiència en reserca tant qualitativa com quantitativa</mark> en entorns acadèmics i en companyia privada. La meva investigació doctoral explora les <mark>categories de tancament social</mark>, com la raça, l'ètnia i la nació: com les persones les construeixen socialment, quines conseqüències tenen per a desigualtats i com podem dissenyar <mark>millors polítiques per alleujar-les</mark>. Utilitzo una varietat de mètodes amb un enfocament en la <mark>ciència social computacional, l'estadística i la inferència causal</mark>. Per la meva tesi vaig dissenyar, implementar i analitzar una enquesta original i un experiment distribuït en 5 països. Sóc coneguda per utilitzar mètodes innovadors i saber com traduir anàlises tècnicament complicades a solucions pràctiques. Actualment treballo com a <mark>investigadora postdoctoral </mark>utilitzant mètodes computacionals i estratègies avançades d'inferència causal per entendre els efectes de les polítiques en diferents aspectes de la salut pública.

Parlo  <mark>català </mark>,  <mark>castellà </mark>,  <mark>anglès </mark> i una mica de  <mark>francès </mark> amb humans;  <mark>R </mark>,  <mark>python</mark>,  <mark>sql</mark>,  <mark>html</mark>,  <mark>css</mark>,  <mark>javascript</mark> i una mica de  <mark>Stan </mark>amb ordinadors. <br><br>
Tinc experiència donant classes  <mark>lenguatges de programació </mark>,  <mark>estadística </mark> i  <mark>inferència causal </mark> a estudiants de postgrau, així com  <mark>mètodes de recerca  </mark>a estudiants de grau.
`,


     es: ` <p><mark>hola</mark>, soy un/a <mark>investigador/a de ciencias sociales</mark> con un <mark>doctorado en sociología</mark> y una formación en <a href="http://mpnyka.github.io/journalism.html" target="_blank"><mark>periodismo</mark></a>. <br><br>
      Tengo más de <mark>10 años de experiencia realizando investigación cualitativa y cuantitativa </mark>
      en entornos académicos e industriales. Mi investigación doctoral investigó <mark>categorías de cierre social</mark>, como raza, etnia y nación: cómo las personas las construyen socialmente, qué consecuencias tienen para la desigualdad y cómo podemos <mark>diseñar mejores políticas</mark> para aliviar estas desigualdades. Utilizo una variedad de métodos con un enfoque en <mark>ciencia social computacional, estadísticas e inferencia causal</mark>. Mi trabajo de tesis consistió en diseñar, implementar y analizar una encuesta original y un experimento distribuido en 5 países. Soy conocido/a por utilizar métodos innovadores, y me esfuerzo por traducir conocimientos complejos en resultados aplicables. Actualmente trabajo como <mark>Investigador/a Postdoctoral</mark> utilizando métodos computacionales y avanzadas estrategias de inferencia causal para comprender los efectos de las políticas en la salud pública. <br><br>
      
      Hablo <mark>catalán</mark>, <mark>español</mark>, <mark>inglés</mark> y algo de <mark>francés</mark> con personas; <mark>R</mark>, <mark>python</mark>, <mark>sql</mark>, <mark>html</mark>, <mark>css</mark>, <mark>javascript</mark> y algo de <mark>Stan</mark> con computadoras. <br><br>
      Tengo experiencia enseñando <mark>lenguajes de programación</mark>, <mark>estadísticas</mark> e <mark>inferencia causal</mark> a estudiantes de posgrado, así como <mark>métodos de investigación</mark> a estudiantes de pregrado.<br><br>
    `,
  };

  // Function to set the language and save preference
  function setLang(lang) {

  const buttons = document.querySelectorAll('.lang-button');
  buttons.forEach(button => button.classList.remove('active'));  // Remove 'active' from all buttons

  // Add 'active' class to the clicked button
  const activeButton = document.querySelector(`button[onclick="setLang('${lang}')"]`);
  activeButton.classList.add('active');
  
  // Set language in localStorage and render content
  localStorage.setItem('preferredLang', lang);
  renderContent(lang);
  }

  // Function to render the content based on the language
  function renderContent(lang) {
    document.getElementById("intro").innerHTML = content[lang];
  }

  renderContent(langToUse);